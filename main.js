'use strict';

const display = document.getElementById('displayV');
const numeros = document.querySelectorAll('[id*=num]')

const atualizarDis = (texto) => {
    display.textContent += texto;
}

const inserindoN = (evento) => atualizarDis(evento.target.textContent)

numeros.forEach(numero =>
    numero.addEventListener('click', inserindoN)
);