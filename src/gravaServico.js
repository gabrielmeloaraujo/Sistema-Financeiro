// Aguarda o carregamento completo do DOM

    const form = document.getElementById("salvar")
    
    // Recupera dados armazenados previamente ou inicia uma lista vazia
    let descricoes = JSON.parse(localStorage.getItem("Descricoes")) || [];
    
    // Função para salvar a descrição
    form.addEventListener('click', (event) =>{
        event.preventDefault(); // Evita o envio do formulário e o recarregamento da página
        
        // Captura o valor do campo de entrada
        const descricaoInput = document.getElementById("Descricao").value;
        console.log(descricaoInput)
        const descricao = descricaoInput;
        
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