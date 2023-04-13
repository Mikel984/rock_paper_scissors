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

/* 4. Declaramos variables para la funcion singleRound() las declarams fuera, global
   scope, de la funcion para poder ejecutarlas luego en otras funciones o en otra parte
   del script, si las declarsemos dentro solo de podrian ejecutar dentro de la
   misma funcion donde se declararon es decir en el local scope */

/* variables */
   
let roundWinner;
let showMessage = "The winner is the ";

/* Funcion */
let userSelection = getUserChoice();
let computerSelection = getComputerChoice();
/* Declaro primero las variables que seran los parametros de la funcion ya que
   estas deben tener el valor de las funciones getUserChoice Y getCompuerChoice */ 

 function singleRound(userSelection,computerSelection){
     userSelection = userSelection.toLowerCase();    /*Convertimos las strings qeu entran a minusculas para compararlas */
     computerSelection = computerSelection.toLowerCase();
     if (userSelection === computerSelection){

         roundWinner = "Tie"
         console.log(roundWinner);

     }else if ((userSelection==="rock" && computerSelection==="scissors")||
         (userSelection==="paper" && computerSelection==="rock")||
         (userSelection==="scissors" && computerSelection==="paper")){

         roundWinner = "Player";
         console.log(showMessage + roundWinner);

     }else{

         roundWinner = "Computer"
         console.log(showMessage + roundWinner);
     }
             
 }

     /* Llamada de prueba a la funcion singleRound */

     singleRound(userSelection,computerSelection);





