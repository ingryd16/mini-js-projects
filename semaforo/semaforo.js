//jeito corrigido com mais tecnicas

//ao inves de pegar os botoes separadamente, peguei a div pai
const img = document.getElementById('img')
const btns = document.getElementById('btns')

let colorIndex = 0;

const trafficLight = (event) => {
    //primeiro jeito de chamar um metodo:
    //turnOn.vermelho()

    //segundo jeito:
    turnOn[event.target.id]();
}

const changecolor = () => {
    const colors = ['vermelho', 'amarelo', 'verde']
    const color = colors [colorIndex];
    turnOn[color]()
}

const turnOn = {
    'vermelho': () => img.src = './img/vermelho.png',
    'amarelo': () => img.src = './img/amarelo.png',
    'verde': () => img.src = './img/verde.png',
    'automatico': () => setInterval (changecolor, 1000)
};

btns.addEventListener('click', trafficLight);