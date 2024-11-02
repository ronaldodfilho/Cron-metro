//import do HTML

const buttonStart = document.querySelector("#start-b");
const buttonStop = document.querySelector("#stop-b");

let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let seconds = document.querySelector("#seconds");
let miliseconds = document.querySelector("#miliseconds");

let numberSeconds = 0; //variaveis de controle de tempo
let numberMinutes = 0;
let numberMiliseconds = 0;
let cronMin; // variáveis para armazenar o Interval
let cronSec;
let cronMs;

let ispaused = false; //variável de controle

function resetNumbers() { //função responsável por zerar o cronômetro
    numberMinutes = 0;
    numberSeconds = 0;
    numberMiliseconds = 0; // altera valores de controle

    seconds.textContent = "00"; // altera exibição na tela
    miliseconds.textContent = "00";
    minute.textContent = "00"
}

//botão de inciar
buttonStart.addEventListener("click", function () {

    buttonStart.style.display = "none" //torna o botão de inicio invisivel
    buttonStart.textContent = "Iniciar" //altera o texto após o botão ser exibido novamente

    //milisegundos
    cronMs = setInterval(function () {

        numberMiliseconds++;

        if (miliseconds.textContent >= 99) {
            numberMiliseconds = 0;
        } //limite

        // Formatação 
        miliseconds.textContent = numberMiliseconds.toString().padStart(2, '0');

    }, 10)

    // segundos
    cronSec = setInterval(function () {

        numberSeconds++;

        if (seconds.textContent >= 59) {
            numberSeconds = 0;
        } //limite

        // Formatação 
        seconds.textContent = numberSeconds.toString().padStart(2, '0');

    }, 1000)

    // minutos
    cronMin = setInterval(function () {

        numberMinutes++

        if (minute.textContent >= 59) {
            resetNumbers()
        } //limite

        // Formatação 
        minute.textContent = numberMinutes.toString().padStart(2, '0');

    }, 60000);

    buttonStop.style.display = "inline-block"

})

//botão de parar/zerar
buttonStop.addEventListener("click", function () {


    if (ispaused === false) {


        buttonStop.textContent = "Zerar"; // altera texto dos botões
        buttonStart.textContent = "Continuar"

        buttonStart.style.display = "inline-block" //visibilidade


        clearInterval(cronSec); // pausa o interval
        clearInterval(cronMin);
        clearInterval(cronMs);

        ispaused = true; //altera variável de controle
    }

    else if (ispaused === true) {


        clearInterval(cronSec); // pausa o interval
        clearInterval(cronMin);
        clearInterval(cronMs);

        resetNumbers(); // zera o cronometro

        buttonStop.textContent = "Parar"; // altera texto dos botões novamente
        buttonStart.textContent = "Iniciar"

        buttonStop.style.display = "none" //altera a visibilidaded dos botões
        buttonStart.style.display = "inline-block"

        ispaused = false; //altera variável de controle


    }
})


