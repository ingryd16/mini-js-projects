const onOff = document.getElementById('onOff');
const lamp = document.getElementById('lamp');


function lampOff (){
    if (!isLampBroken ()){
        lamp.src = './img/desligada.jpg'
    }
}

function lampOn (){
    if (!isLampBroken ()){
        lamp.src = './img/ligada.jpg'
    }
}

function lampBroken (){
    lamp.src = './img/quebrada.jpg'
}

function isLampBroken () {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOnOff (){
    if(onOff.textContent == 'ON'){
        lampOn();
        onOff.textContent = 'OFF'
    } else {
        lampOff();
        onOff.textContent = 'ON'
    }
}

onOff.addEventListener('click', lampOnOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)

//  tbm da p criar a funçao dentro do proprio eventlistener:
//      on.addEventListener('click', function lampOn(){
//          lamp.src = `./img/ligada.jpg`
//      })
