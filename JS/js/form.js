function criarNovoPaciente() {
    var tabela = document.querySelector("#tabela-pacientes");
    var form = document.querySelector("#form-add");  
    
    paciente = obterPacienteForm(form);
    var erro = validarPaciente(paciente);

    if (!(erro.length = 0)){
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erro; 
        
        form.reset();
        return;
    }

    pacienteTr = montarTr(paciente);
    tabela.appendChild(pacienteTr);

    form.reset();
}

function obterPacienteForm(fromulario) {
    var paciente = {
        nome: fromulario.nome.value,
        peso: fromulario.peso.value,
        altura: fromulario.altura.value,
        gordura: fromulario.gordura.value,
        imc: calcularImc(fromulario.peso.value, fromulario.altura.value)
    }
    return paciente;
}


function montarTr(paciente) {
    var newPacienteTr = document.createElement("tr");
    newPacienteTr.classList.add("paciente");

    newPacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    newPacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    newPacienteTr.appendChild(montarTd(paciente.altura, "info-altura0"));
    newPacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    newPacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

    return newPacienteTr;
}

function montarTd(text, className) {
    var td = document.createElement("td");

    td.textContent = text;
    td.classList.add(className);

    return td;
}

function validarPaciente(paciente) {

    if (validarPeso(paciente.peso) && validarAltura(paciente.altura)) {
        return "";
    } else {
        return "Paciente inválido.";
    }
}