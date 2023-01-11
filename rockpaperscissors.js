/* 1. Declramos array sobre la que nuestra funcion getComputerChoice tomara una opcion
    de forma aleatoria */
var computerOptions = ["rock", "paper", "scissors"];

function getComputerChoice(){
    return computerOptions[Math.floor(Math.random()*computerOptions.length)]
}





