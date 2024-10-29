//TODO
//FUNCAO PARA CLICAR NA LUPA E MOSTRAR ESSA MERDA
//<input type="text" name="barra-de-busca" id="barra-de-busca"> colocar
window.onload = () => {
  //Cria a barra superior de navegação
  const icones = document.createElement("div");
  icones.classList.add("barra-superior");
  icones.innerHTML = criarBarraSuperior();
  const barraSuperior = document.getElementById("cabecalho");
  barraSuperior.appendChild(icones);
};
//html da barra superior de navegação
function criarBarraSuperior() {
  return `<div class="mostra-icones">
                  <img src="/imagens/toggle_menu.svg" alt="mostrar ícones de navegaçao">
              </div>
              <div class="container-icones">
                  <div class="busca">
                      <img src="/imagens/search_icon.svg" alt="icone de busca" id="buscar">
                      
                  </div>
                  <div class="notaficacoes">
                      <img src="/imagens/notafication_read.svg" alt="notaficações" id="notaficacoes">
                  </div>
                  <div class="faq">
                      <img src="/imagens/ajuda_manuais.svg" alt="Ajuda/Manuais">
                  </div>
              </div>
          `;
}
