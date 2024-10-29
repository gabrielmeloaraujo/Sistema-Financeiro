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

  const sideBarExpandida = document.createElement("nav");
  sideBarExpandida.classList.add("nav-bar-expandida");
  sideBarExpandida.innerHTML = criarSideBarExpandida();
  const vSideBarExpandida = document.getElementById("side-bar-expandida");
  vSideBarExpandida.appendChild(sideBarExpandida);

  const vSideBarRecolhida = document.createElement("nav");
  vSideBarRecolhida.classList.add("side-bar-recolhida");
  vSideBarRecolhida.innerHTML = criarSideBarRecolhida();
  const sideBarRecolhida = document.getElementById("side-bar-recolhida")
  sideBarRecolhida.appendChild(vSideBarRecolhida)

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
function criarSideBarExpandida() {
  return `      
            <ul>
                <li>Dashboard</li>
                <li>Movimentações</li>
                <li><ul class="lista-interna"> 
                    <li><a href="/contas_receber.html">Contas a Receber</a></li>
                    <li><a href="/contas_pagar.html">Contas a Pagar</a></li>
                    <li><a href="/projetos.html">Projetos</a></li>
                    <li><a href="/orcamentos.html">Orçamentos</a></li>
                </ul></li>              
                <li>Relatórios</li>
                <li><a href="/cadastros.html">Cadastros</a></li>
                <li>
                    <ul class="lista-interna">
                      <li>Serviços</li>
                      <li>Clientes</li>
                    </ul>
                </li>
                
                <li>Configurações</li>
            </ul>
          `;
}

//barra lateral de navegação, só os ícones, sem hover
function criarSideBarRecolhida() {
  return `   <ul>
    <li><a href="index.html"><img src="/imagens/icones/dashboard.svg"></a></li>
    <li><ul> 
        <li><a href="/contas_receber.html"><img src="/imagens/icones/contas_receber.svg" alt=""></a></li>
        <li><a href="/contas_pagar.html"><img src="/imagens/icones/contas_pagar.svg" alt=""></a></li>
        <li><a href="/projetos.html"><img src="/imagens/icones/projetos.svg" alt=""></a></li>
        <li><a href="/orcamentos.html"><img src="/imagens/icones/orcamentos.svg" alt=""></a></li>
    </ul></li>              
    <li>
        <ul>
          <li><a href="/servicos.html"><img src="/imagens/icones/servicos.svg" alt=""></a></li>
          <li><a href="/clientes.html"><img src="/imagens/icones/clientes.svg" alt=""></a></li>
        </ul>
    </li>
    <li><a href=""><img src="/imagens/icones/configuracoes.svg" alt=""></a></li>
</ul>`;
}
