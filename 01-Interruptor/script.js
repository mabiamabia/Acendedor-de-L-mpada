const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');


function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = './img/ligada.jpg'
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = './img/desligada.jpg'
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.jpg'
}

function lampOnOff() {
    if (turnOnOff.textContent == 'Ligar') {
        lampOn();
        turnOnOff.textContent = 'Desligar';
        turnOnOff.style.backgroundColor = "#fa0202";
    }
    else {
        lampOff();
        turnOnOff.textContent = 'Ligar';
        turnOnOff.style.backgroundColor = "rgb(41, 118, 0)";
       
    }
}

turnOnOff.addEventListener('click', lampOnOff);
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroken)