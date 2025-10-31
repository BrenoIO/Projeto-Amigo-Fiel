// Seleciona o botão e o menu
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

// Adiciona o evento de clique
toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
});
