var title = document.querySelector('.title');
title.textContent = 'Aparecida Nutricionista';

var paciente = document.querySelector('#primeiro-paciente');
var pesoEhValido = true;
var alturaEhValida = true;

var tdPeso = paciente.querySelector('.info-peso');
var tdAltura = paciente.querySelector('.info-altura');
var tdImc = paciente.querySelector('.info-imc');

var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

if(peso <= 0 || peso >= 1000) {
    pesoEhValido = false;
    tdPeso.textContent = 'Peso Inválido';
}

if(altura <= 0 || altura >= 3.00) {
    alturaEhValida = false;
    tdAltura.textContent = 'Altura Inválida';
}


if (pesoEhValido && alturaEhValida) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
} else {
    tdImc.textContent = 'Altura e/ou peso inválidos!';
}

