let botao = document.querySelector('.toggle');
let menuLateral = document.querySelector('.menu-lateral');
let topo = document.querySelector('body');
let background = document.querySelector('.background');

botao.addEventListener('click', () => {
    menuLateral.classList.toggle('ativo')
    botao.classList.toggle('ativo')
    topo.classList.toggle('ativo')
    background.classList.toggle('ativo')
    document.body.style.backgroundColor = menuLateral.classList.contains('ativo') ? '#34495e' : '#ecf0f1'
})
background.addEventListener('click', () => {
    menuLateral.classList.remove('ativo')
    botao.classList.remove('ativo')
    topo.classList.remove('ativo')
    background.classList.remove('ativo')
    document.body.style.backgroundColor = '#ecf0f1'
})



/* CALCULADORA */
let form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault()

    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    let erroWeight = document.getElementById('erro-weight');
    let erroHeight = document.getElementById('erro-height');

    // limpa erros
    erroWeight.textContent = "";
    erroHeight.textContent = "";

    let temErro = false;
    erroWeight.style.setProperty('color', '#ff1900', 'important');
erroHeight.style.setProperty('color', '#ff1900', 'important');

    // valida peso
    if (!weight || weight <= 0) {
        erroWeight.textContent = "Digite um peso válido acima de zero.";
        temErro = true;
    }

    // valida altura
    if (!height || height <= 0) {
        erroHeight.textContent = "Digite uma altura válida acima de zero.";
        temErro = true;
    }

    if (temErro) {
        return; // para o formulário se tiver erro
    }

    if (height > 3) {
        height = height / 100;
    }

    let bmi = (weight / (height * height)).toFixed(2);

    let value = document.getElementById('value');
    let description = '';
    let color = '';
    document.getElementById('infos').classList.remove('hidden')

    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!'
        color = '#f1c40f';
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Você está no peso ideal!'
        color = '#2ecc71';
    } else if (bmi >= 25 && bmi <= 30) {
        description = 'Cuidado! Você está com sobrepeso!'
        color = '#f39c12';
    } else if (bmi >= 30 && bmi <= 35) {
        description = 'Cuidado! Você está com obesidade moderada!'
        color = '#e67e22';
    } else if (bmi >= 35 && bmi <= 40) {
        description = 'Cuidado! Você está com obesidade severa!'
        color = '#e74c3c';
    } else {
        description = 'Cuidado! Você está com obesidade morbida!'
        color = '#8e44ad';
    }
    value.textContent = bmi
    value.style.color = color;
    let descSpan = document.querySelector("#description span");
descSpan.textContent = description;
descSpan.style.setProperty('color', color, 'important');
});

let backgroundImc = document.querySelector('.background-imc');
let btnImc = document.getElementById("btn-imc");
let modal = document.getElementById("contem");

btnImc.addEventListener("click", function () {
    modal.classList.add("ativo");
    backgroundImc.classList.add("ativo");
});
backgroundImc.addEventListener("click", function () {
    modal.classList.remove("ativo");
    backgroundImc.classList.remove("ativo");
    });

