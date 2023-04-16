//jeito corrigido com mais tecnicas

//ao inves de pegar os botoes separadamente, peguei a div pai
const img = document.getElementById('img')
const btns = document.getElementById('btns')

let colorIndex = 0;
let intervalID = null;

const trafficLight = (event) => {
    //primeiro jeito de chamar um metodo:
    //turnOn.vermelho()

    //segundo jeito:
    stopAutomatic ();
    turnOn[event.target.id]();
    stopAutomatic
}

const nextIndex = () => {
    if (colorIndex < 2){
        colorIndex ++
    } else {
        colorIndex = 0
    }

    //posso fazer a validação assim tb:
    //const nextIndex = () => colorIndex = colorIndex < 2? ++colorIndex : 0;
}

const changecolor = () => {
    const colors = ['vermelho', 'amarelo', 'verde']
    const color = colors [colorIndex];
    turnOn[color]();
    nextIndex()
}

const stopAutomatic = () => {
    clearInterval (intervalID)
}

const turnOn = {
    'vermelho': () => img.src = './img/vermelho.png',
    'amarelo': () => img.src = './img/amarelo.png',
    'verde': () => img.src = './img/verde.png',
    'automatico': () => intervalID = setInterval (changecolor, 500)
};

btns.addEventListener('click', trafficLight);