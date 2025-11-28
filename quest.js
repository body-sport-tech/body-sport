document.addEventListener('DOMContentLoaded', function () {
 
  const btnSim = document.getElementById('open');
  const cartoes = document.getElementById('cartoes');
  if (cartoes) {
    cartoes.classList.remove('ativo');
    cartoes.setAttribute('aria-hidden', 'true');
  }
  if (btnSim && cartoes) {
    btnSim.addEventListener('click', () => {
      const aberto = cartoes.classList.toggle('ativo');
      cartoes.setAttribute('aria-hidden', (!aberto).toString());
    });
  }
///
  
  function pegarValoresInternal() {

    const esportes = document.getElementsByName("esporte");
    const esportesSelecionados = [];
    for (let i = 0; i < esportes.length; i++) {
      if (esportes[i].checked) {
        esportesSelecionados.push(esportes[i].value);
      }
    }
    localStorage.setItem("esportes", JSON.stringify(esportesSelecionados));
    console.log("esportes salvos:", esportesSelecionados);

    const radios = document.getElementsByName("bola");
    let radioSelecionado = null;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        radioSelecionado = radios[i].value;
        break;
      }
    }
    if (radioSelecionado !== null) {
      localStorage.setItem("frequencia", radioSelecionado);
      console.log("frequencia salva:", radioSelecionado);
    }

    return { esportes: esportesSelecionados, frequencia: radioSelecionado };
  }
  window.pegarValores = function () {
    return pegarValoresInternal();
  };

  const formEsportes = document.getElementById('form-esportes');
  const botaoEnviar = document.getElementById("botaoEnviar");
  
  if (formEsportes) {
    formEsportes.addEventListener('submit', function (e) {
      pegarValoresInternal();
  
    });
  // } else if (botaoEnviar) {
  
  if (botaoEnviar) {
    botaoEnviar.addEventListener("click", pegarValoresInternal);
  }

    botaoEnviar.addEventListener("click", pegarValoresInternal);
  }

  window.pagFinal = function () {
    const nomeInput = document.getElementById('nome') || document.querySelector(".campo input");
    const nome = nomeInput ? nomeInput.value : "";
    localStorage.setItem("nome", nome);
    console.log("nome salvo:", nome);
  };
});


