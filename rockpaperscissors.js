/* 1. Declramos array sobre la que nuestra funcion getComputerChoice tomara una opcion
    de forma aleatoria */
var computerOptions = ["rock", "paper", "scissors"];

/* 2. Creamos funcion getComputerChoice usando Math.random convinado con Math.floor
      para determinar la posicion del elemento de nuestra array que retorna como valor
      para que sea aleatorio */
      
function getComputerChoice(){
    return computerOptions[Math.floor(Math.random()*computerOptions.length)]
}
console.log(getComputerChoice());




