
//cores da paleta de cores
let black = document.getElementsByClassName('color selected')[0].style.background = 'black';
let secondcolor = document.querySelectorAll('.color')[1].style.background = 'rgb(227, 233, 236)';
let thirdcolor = document.querySelectorAll('.color')[2].style.background = 'rgb(251, 5, 46)';
let fourthcolor = document.querySelectorAll('.color')[3].style.background = 'rgb(7, 81, 165)';

//colorindo pixel cor preta como cor de entrada

function colorirpixel(pixel) {
 pixel.style.background = pencolour;
}

let pencolour = 'black'
function setPenColour(color) {
 pencolour = color;
}

//criar uma função para selecionar as cores quando clicar


//botao limpar
 botaolimpar=document.getElementById("clear-board")
function limparcores(){
const pixels= document.querySelectorAll(".pixel");
 for (let i=0;i<pixels.length;i+=1){
  pixels[i].style.backgroundColor = 'rgb(255, 255, 255)';
 }
}
botaolimpar.addEventListener("click",limparcores)




