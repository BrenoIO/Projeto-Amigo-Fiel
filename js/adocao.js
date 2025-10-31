// Função para gerar um nome aleatório
function gerarNomeAleatorio() {
    const nomes = ["Luna", "Thor", "Mel", "Simba", "Nina", "Max", "Bento", "Mia", "Toby", "Lola", "Sansão", "Dora Aventure", "Bobson", "Todynho"];
    return nomes[Math.floor(Math.random() * nomes.length)];
}

// Função que cria um card com imagem e nome
function criarCardAnimal(imagemUrl, tipo) {
    const card = document.createElement("div");
    card.classList.add("animal-card");

    const img = document.createElement("img");
    img.src = imagemUrl;
    img.alt = `${tipo} para adoção`;

    const nome = document.createElement("h3");
    nome.textContent = gerarNomeAleatorio();

    const btn = document.createElement("button");
    btn.textContent = "Quero Adotar ❤️";

    card.appendChild(img);
    card.appendChild(nome);
    card.appendChild(btn);

    return card;
}

// Função principal para carregar os animais
async function carregarAnimais() {
    const container = document.getElementById("lista-animais");
    container.innerHTML = ""; // limpa antes de carregar

    // Pegando 3 cachorros e 3 gatos
    for (let i = 0; i < 3; i++) {
        // Dog API
        const dogResponse = await fetch("https://dog.ceo/api/breeds/image/random");
        const dogData = await dogResponse.json();
        container.appendChild(criarCardAnimal(dogData.message, "Cachorro"));

        // Cat API
        const catResponse = await fetch("https://api.thecatapi.com/v1/images/search");
        const catData = await catResponse.json();
        container.appendChild(criarCardAnimal(catData[0].url, "Gato"));
    }
}

// Botão de recarregar animais
document.getElementById("recarregar").addEventListener("click", () => {
    carregarAnimais(); // chama novamente a função principal
});

// Chama a função ao carregar a página
document.addEventListener("DOMContentLoaded", carregarAnimais);

