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

  const sideBarExpandida = document.createElement("nav")
  sideBarExpandida.classList.add('nav-bar-expandida')
  sideBarExpandida.innerHTML = criarSideBarExpandida();
  const vSideBarExpandida = document.getElementById('side-bar-expandida')
  vSideBarExpandida.appendChild(sideBarExpandida)



};
//html da barra superior de navegação
function criarBarraSuperior() {
  const tituloPagina = document.title;
  return `    <div class="mostra-icones">
                  <img src="/imagens/toggle_menu.svg" alt="mostrar ícones de navegaçao">
                  <span>${tituloPagina}</span>
              </div>
              <div class="container-icones">
                  <div class="busca" id ="container-busca">
                    <img src="/imagens/search_icon.svg" alt="icone de busca" id="buscar">  
                  </div>
                  <div class="notaficacoes">
                    <img src="/imagens/notafication_read.svg" alt="notaficações" id="notaficacoes">
                  </div>
                  <div class="faq">
                    <a href="https:\\chatgpt.com" target="_blank"><img src="/imagens/ajuda_manuais.svg" alt="Ajuda/Manuais"></a>
                  </div>
              </div>
          `;
}
//barra lateral de navegação, on hover
function criarSideBarExpandida (){
  return `      
            <ul>
                <li>Dashboard</li>
                <li>Movimentações</li>
                <li><ul class="lista-interna"> 
                    <a href="/contas_receber.html">
                    <li>Contas a Receber</li>
                    </a>
                    <li>Contas a Pagar</li>
                    <li>Projetos</li>
                    <li>Orçamentos</li>
                </ul></li>              
                <li>Relatórios</li>
                <li><a href="/cadastros.html"></a>Cadastros</li>
                <li class="lista-interna">
                    <ul>
                      <li>Serviços</li>
                      <li>Clientes</li>
                    </ul>
                </li>
                
                <li>Configurações</li>
            </ul>
          `
}

//barra lateral de navegação, só os ícones, sem hover
function criarSideBarRecolhida (){

}