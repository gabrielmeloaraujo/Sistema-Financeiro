// Aguarda o carregamento completo do DOM
window.onload=()=>{
    const form = document.getElementById("Cadastro");
    
    // Recupera dados armazenados previamente ou inicia uma lista vazia
    let descricoes = JSON.parse(localStorage.getItem("Descricoes")) || [];
    
    // Função para salvar a descrição
    form.addEventListener("Salvar", function (event) {
        event.preventDefault(); // Evita o envio do formulário e o recarregamento da página
        
        // Captura o valor do campo de entrada
        const descricaoInput = document.getElementById("Descricao").value;
        const descricao = descricaoInput.value.trim();
        
        // Verifica se o campo não está vazio antes de adicionar
        if (descricao !== "") {
            // Cria um novo objeto de descrição
            const novaDescricao = { descricao };

            // Adiciona o novo objeto ao array de descrições
            descricoes.push(novaDescricao);

            // Armazena o array atualizado no localStorage
            localStorage.setItem("Descricoes", JSON.stringify(descricoes));

            alert("Registro adicionado com sucesso!");

            // Limpa o campo após salvar
            descricaoInput.value = "";
        } else {
            alert("Por favor, preencha a descrição antes de salvar.");
        }
    });
}