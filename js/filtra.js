var compoFiltro = document.querySelector('#filtrar-tabela');

compoFiltro.addEventListener('input', function() {
    var pacientes = document.querySelectorAll('.paciente');

    if (this.value.length > 0) {
        pacientes.forEach(paciente => {
            var tdNome = paciente.querySelector('.info-nome'); 
            var nome = tdNome.textContent;
            
            if( nome !== this.value) {
                paciente.classList.add('invisivel');
            } else {
                paciente.classList.remove('invisivel');
            }
        });
    } else {
        pacientes.forEach(paciente => {
            paciente.classList.remove('invisivel');
        });
    }

});


