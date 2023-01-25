/* 1. Declramos array sobre la que nuestra funcion getComputerChoice tomara una opcion
    de forma aleatoria */

var computerOptions = ["rock", "paper", "scissors"];


    /* 2. Creamos funcion getComputerChoice usando Math.random convinado con Math.floor
      para determinar la posicion del elemento de nuestra array que retorna como valor
      para que sea aleatorio */

function getComputerChoice(){
    return computerOptions[Math.floor(Math.random()*computerOptions.length)];    
}


/* 3- Incluyo funcion getUserChoice() para obtener la decision del usuario a partir de 
       un prompt para qeu pueda ingresar la cadena oportuna en cada ronda del juego 
       cuandoincluyamos nuestra condicional dentro de un bucle repetitivo*/

function getUserChoice(){
    return prompt("What is you choice??: ");
}







