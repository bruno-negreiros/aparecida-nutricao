var title = document.querySelector('.title');
title.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i ++) {

    var paciente = pacientes[i];

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
        paciente.classList.add('paciente-invalido');
    }

    if(altura <= 0 || altura >= 3.00) {
        alturaEhValida = false;
        tdAltura.textContent = 'Altura Inválida';
        paciente.classList.add('paciente-invalido');
    }


    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    } else {
        tdImc.textContent = 'Altura e/ou peso inválidos!';
    }
}


var botaoAdicionar = document.querySelector('#adicionar-paciente');

botaoAdicionar.addEventListener('click', function(event) {
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');

    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement('tr');

    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr);
});


