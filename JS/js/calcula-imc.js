var titulo = document.querySelector(".titulo");
titulo.textContent = "Teste Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
var botaoAdicionarPaciente = document.querySelector("#adicionar-paciente");

pacientes.forEach(paciente => {
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;

    var alturaValida = validarAltura(altura);
    var pesoValido = validarPeso(peso);
    var imc = calcularImc(peso, altura);

    if (!pesoValido) {
        paciente.classList.add("paciente-invalido");
        console.log("Peso inválido");
        paciente.querySelector(".info-imc").textContent = "Peso inválido";
    }

    if (!alturaValida) {
        paciente.classList.add("paciente-invalido");
        console.log("Altura inválida");
        paciente.querySelector(".info-imc").textContent = "Altura inválido";
    }

    if (pesoValido && alturaValida) {
        paciente.querySelector(".info-imc").textContent = imc;
    }

});

function calcularImc(peso, altura) {
    var imc = peso / (Math.pow(altura, 2));
    return imc.toFixed(2);
}

function validarPeso(peso) {
    if (peso <= 0 || peso > 500) {
        return false;
    } else {
        return true;
    }
}

function validarAltura(altura) {
    if (altura <= 0 || altura > 3.0) {
        return false;
    } else {
        return true;
    }
}

botaoAdicionarPaciente.addEventListener("click", function (event) {
    event.preventDefault();
    criarNovoPaciente();
});