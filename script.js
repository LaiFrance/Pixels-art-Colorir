
//cores da paleta de cores
let black = document.getElementsByClassName('color')[0].style.background = 'black';
let gray = document.querySelectorAll('.color')[1].style.background = 'gray'
let red = document.querySelectorAll('.color')[2].style.background = 'red'
let blue = document.querySelectorAll('.color')[3].style.background = 'blue'



//colorindo pixels (cor preta como cor de entrada)

function colorirpixel(pixel) {
 pixel.style.background = pencolour;
}

let pencolour = 'black'
function setPenColour(color) {
 pencolour = color;
}

//criar uma função para selecionar as cores quando clicar




//botao limpar
 botaolimpar=document.getElementById("clear-board")//localizar id
 //criar função
function limparcores(){
const pixels= document.querySelectorAll(".pixel");//seleciona pixels
 for (let i=0;i<pixels.length;i+=1){ //percorrer pixels
  pixels[i].style.backgroundColor = 'rgb(255, 255, 255)';// cor branca 
 }
}
botaolimpar.addEventListener("click",limparcores) // adicionar evento (depois olhar pq o value não funcionou e pesquisar sobre o botão reset)



//alterar cores
botaocores = document.getElementsByClassName ("mudarcores");
function escolhercores(){
 
}
