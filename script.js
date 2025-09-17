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