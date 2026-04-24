let listaDePokemon = [];

function adicionarAluno() {
    let inputNome = document.getElementById("Nome");

    if (inputNome.value === "") {
        alert("Erro: Preencha todos os campos antes de adicionar.");
        return;
    }

    let pokemon = {
        id: Date.now(), 
        nome: inputNome.value,
    };

    listaDePokemon.push(pokemon);
    atualizarListaNaTela();

    inputNome.value = "";
    inputNome.focus();
}

function removerPokemon(idParaRemover) {
    listaDePokemon = listaDePokemon.filter(pokemon => pokemon.id !== idParaRemover);
    atualizarListaNaTela();
}

function editarPokemon(idParaEditar) {
    let pokemon = listaDePokemon.find(p => p.id === idParaEditar);
    
    if (pokemon) {
        let novoNome = prompt("Edite o nome do Pokémon:", pokemon.nome);
        
        if (novoNome !== null && novoNome.trim() !== "") {
            pokemon.nome = novoNome.trim();
            
            atualizarListaNaTela();
        }
    }
}

function atualizarListaNaTela() {
    let listaGeralHTML = document.getElementById("listaPokemon");

    listaGeralHTML.innerHTML = "";

    listaDePokemon.forEach(pokemon => {
        let li = document.createElement("li");
        
        li.innerHTML = pokemon.nome;
        
        let btnEditar = document.createElement("button");
        btnEditar.innerText = "Editar";
        btnEditar.className = "btn-edit";
        btnEditar.onclick = () => editarPokemon(pokemon.id);

        let btnRemover = document.createElement("button");
        btnRemover.innerText = "Remover";
        btnRemover.className = "btn-remove";
        btnRemover.onclick = () => removerPokemon(pokemon.id);
        
        li.appendChild(btnEditar);
        li.appendChild(btnRemover);
        
        listaGeralHTML.appendChild(li);
    });
}