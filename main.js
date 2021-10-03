"use strict";


let images = ['img/space1.jpg', 'img/space2.jpg', 'img/bild1.jpeg', 'img/space3.jpg', 'img/bild2.jpg', 'img/bild3.jpg', 'img/bild4.jpg', 'img/bild5.jpg', 'img/bild6.jpg', 'img/bild7.jpg', 'img/bild8.jpg', 'img/space4.jpg'];
let dias=[];
let currentImage=0;
let ids=[];
load();

function load() {
    for (let i = 0; i < images.length; i++) {
        document.getElementById('imgCon').innerHTML += `
        <div  onclick="openImage(${i})" class="imgBox">
        <img id="${i}" src="${images[i]}" alt="">
        </div>`;
    }
}


function openImage(i) {
    document.getElementById('fullImage').innerHTML = `
    <img id="${i}" src="${images[i]}" alt="">
    `;
    document.getElementById('fullImage').classList.add('goInFront');
    document.getElementById('fullImage-menu').classList.add('goInFront');
}


function exitFull() {
    document.getElementById('fullImage').classList.remove('goInFront');
    document.getElementById('fullImage-menu').classList.remove('goInFront');
    document.getElementById('fullImage').classList.add('hide');
    document.getElementById('fullImage-menu').classList.add('hide');

}

function addToShow(){
   let img = document.getElementById('fullImage').innerHTML;
   dias.push(img);
   
   let id=document.getElementById('fullImage').getElementsByTagName('img').id;
   document.getElementById(id).classList.add('diaSelectBorder');
   ids.push(id);
   load();
}


function startDia(){
   
   showDia(currentImage);
   currentImage++;
   if (currentImage<dias.length){
       setTimeout(startDia,3000);
   }
   else {currentImage=0;setTimeout(startDia,3000);}


}

function showDia(i){
    document.getElementById('diaCon').innerHTML=`${dias[i]}`;
}

function getGrid(){
    for (let i=0;i<800;i++){
        document.getElementById('grid').innerHTML+=`
        <div onclick="vanish('box${i}')" id="box${i}" class="block"></div>`;
    }
}

function startQuiz(){
    getGrid();
    
    document.getElementById('grid').classList.add('resetZ');
    document.getElementById('grid').classList.add('grindInFront');
    document.getElementsByClassName("block").classList.add('gridInFront');
    document.getElementById('grid').style.height="100vh";
}

function vanish(i){
    
    document.getElementById(i).style.opacity="0";
}