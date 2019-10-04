function criarNovoPaciente() {
    var tabela = document.querySelector("#tabela-pacientes");
    var form = document.querySelector("#form-add");

    var paciente = obterPacienteForm(form);
    var erros = validarPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    pacienteTr = montarTr(paciente);
    tabela.appendChild(pacienteTr);

    form.reset();
    document.querySelector("#mensagens-erro").innerHTML = "";
}

function exibeMensagensDeErro(errosEncontrados){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    
    errosEncontrados.forEach(erro => {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
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
    newPacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
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
    var erros = [];

    if(paciente.nome.length == 0)
        erros.push("Nome inválido.")

    if (!validarPeso(paciente.peso) || paciente.peso.length == 0) 
        erros.push("Peso inválido.");

    if (!validarAltura(paciente.altura))
        erros.push("Altura inválida.");

    if (paciente.gordura <= 0 || paciente.gordura.length == 0)
        erros.push("Gordura inválida");

    return erros;
}