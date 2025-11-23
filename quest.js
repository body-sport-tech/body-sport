// pega referências
const btnSim = document.getElementById('open');
const cartoes = document.getElementById('cartoes');  
cartoes.classList.remove('ativo');
cartoes.setAttribute('aria-hidden', 'true');

btnSim.addEventListener('click', () => {
  const aberto = cartoes.classList.toggle('ativo');
  cartoes.setAttribute('aria-hidden', (!aberto).toString());

});

function pagFinal(){
   const nome = document.querySelector(".campo input").value
  //document.querySelector(".parte h1 span").innerHTML = nome
  console.log("entrou")
  localStorage.setItem("nome", nome);
//window.location = "pagina02.html";
}
//ihoihy
let botaoEnviar = document.getElementById("botaoEnviar")

function pegarValores (){
  
  let esportes = document.getElementsByName("esporte")
  let esportesSelecionados = []
  for ( var i=0; i< esportes.length; i++){
    if (esportes[i].checked){
      console.log("os cursos selecionados são:"+ esportes[i].value)
      esportesSelecionados.push(esportes[i].value)
    }
  }
     
  localStorage.setItem("esportes", JSON.stringify(esportesSelecionados));

}

botaoEnviar.addEventListener("click", pegarValores)

