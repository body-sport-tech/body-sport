/* ============================
   MENU LATERAL (TOGGLE)
============================ */

// Seleciona os elementos essenciais do menu lateral
let botao = document.querySelector('.toggle');          // Botão que abre/fecha o menu
let menuLateral = document.querySelector('.menu-lateral'); // Menu lateral
let topo = document.querySelector('body');              // Body para aplicar efeito de blur/bloqueio
let background = document.querySelector('.background'); // Fundo escurecido atrás do menu

// Abre ou fecha o menu ao clicar no botão
botao.addEventListener('click', () => {
    menuLateral.classList.toggle('ativo');     // Mostra/esconde menu
    botao.classList.toggle('ativo');           // Anima o ícone de menu
    topo.classList.toggle('ativo');            // Bloqueia a rolagem ou aplica efeitos
    background.classList.toggle('ativo');      // Ativa o fundo escurecido

    // Muda a cor de fundo da página conforme o menu está aberto ou fechado
    document.body.style.backgroundColor = 
        menuLateral.classList.contains('ativo') ? '#34495e' : '#ecf0f1';
});

// Fecha o menu ao clicar no fundo escuro
background.addEventListener('click', () => {
    menuLateral.classList.remove('ativo');
    botao.classList.remove('ativo');
    topo.classList.remove('ativo');
    background.classList.remove('ativo');
    document.body.style.backgroundColor = '#ecf0f1';
});



/* ============================
   CALCULADORA DE IMC
============================ */

// Seleciona o formulário
let form = document.getElementById('form');
console.log(form); // Debug opcional

// Evento ao enviar o formulário
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Evita recarregar a página

    // Captura valores de peso e altura
    let weight = parseFloat(document.getElementById('weight').value);
    let height = parseFloat(document.getElementById('height').value);

    // Seleciona áreas de erro
    let erroWeight = document.getElementById('erro-weight');
    let erroHeight = document.getElementById('erro-height');

    // Limpa erros anteriores
    erroWeight.textContent = "";
    erroHeight.textContent = "";

    // Deixa a cor dos erros vermelha (força prioridade!)
    erroWeight.style.setProperty('color', '#ff1900', 'important');
    erroHeight.style.setProperty('color', '#ff1900', 'important');

    let temErro = false; // Controle geral de erros

    // Validação: peso precisa ser válido
    if (!weight || weight <= 0) {
        erroWeight.textContent = "Digite um peso válido acima de zero.";
        temErro = true;
    }

    // Validação: altura precisa ser válida
    if (!height || height <= 0) {
        erroHeight.textContent = "Digite uma altura válida acima de zero.";
        temErro = true;
    }

    // Se tiver qualquer erro, interrompe a execução
    if (temErro) return;

    // Se a altura estiver em centímetros, converte para metros
    if (height > 3) {
        height = height / 100;
    }

    // Calcula IMC
    let bmi = (weight / (height * height)).toFixed(2);

    // Seleciona elementos para exibir resultado
    let value = document.getElementById('value');
    let description = '';
    let color = '';

    // Exibe a divisão de informações
    document.getElementById('infos').classList.remove('hidden');

    // Define a categoria conforme o IMC
    if (bmi < 18.5) {
        description = 'Cuidado! Você está abaixo do peso!';
        color = '#f1c40f';
    } else if (bmi >= 18.5 && bmi <= 25) {
        description = 'Você está no peso ideal!';
        color = '#2ecc71';
    } else if (bmi >= 25 && bmi <= 30) {
        description = 'Cuidado! Você está com sobrepeso!';
        color = '#f39c12';
    } else if (bmi >= 30 && bmi <= 35) {
        description = 'Cuidado! Você está com obesidade moderada!';
        color = '#e67e22';
    } else if (bmi >= 35 && bmi <= 40) {
        description = 'Cuidado! Você está com obesidade severa!';
        color = '#e74c3c';
    } else {
        description = 'Cuidado! Você está com obesidade mórbida!';
        color = '#8e44ad';
    }

    // Coloca o valor do IMC no HTML
    value.textContent = bmi;
    value.style.color = color;

    // Atualiza texto e cor da descrição
    let descSpan = document.querySelector("#description span");
    descSpan.textContent = description;
    descSpan.style.setProperty('color', color, 'important');
});



/* ============================
   MODAL DO IMC
============================ */

// Elementos do modal
let backgroundImc = document.querySelector('.background-imc');
let btnImc = document.getElementById("btn-imc");
let modal = document.getElementById("contem");

// Abre o modal ao clicar no botão
btnImc.addEventListener("click", function () {
    modal.classList.add("ativo");
    backgroundImc.classList.add("ativo");
});

// Fecha o modal ao clicar no fundo escuro
backgroundImc.addEventListener("click", function () {
    modal.classList.remove("ativo");
    backgroundImc.classList.remove("ativo");
});
