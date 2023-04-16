//jeito que eu fiz inicialmente

//buttons
const vermelho = document.getElementById('vermelho')
const verde = document.getElementById('verde')
const neutro = document.getElementById('neutro')
const amarelo = document.getElementById('amarelo')

//imgs
const semaforo = document.getElementById('desligado')

function sem_vermelho(){
    semaforo.src = './img/vermelho.png'
}
function sem_verde(){
    semaforo.src = './img/verde.png'
}
function sem_amarelo(){
    semaforo.src = './img/amarelo.png'
}
function sem_automatico(){
    semaforo.src = './img/desligado.png'
}



vermelho.addEventListener('click', sem_vermelho);
verde.addEventListener('click', sem_verde);
amarelo.addEventListener('click', sem_amarelo);
automatico.addEventListener('click', sem_automatico)
