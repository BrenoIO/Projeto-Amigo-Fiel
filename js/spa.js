const menuLinks = document.querySelectorAll('.menu a');
const hoverMsg = document.getElementById('hover-msg');

menuLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        const msg = link.getAttribute('data-msg');
        const emoji = link.textContent.split(' ')[0]; // pega emoji do link
        hoverMsg.innerHTML = `<span class="emoji">${emoji}</span><p>${msg}</p>`;
        hoverMsg.style.display = 'flex'; // mostra a div
    });

    link.addEventListener('mouseleave', () => {
        hoverMsg.style.display = 'none'; // esconde a div
        hoverMsg.innerHTML = ''; // limpa conteúdo
    });
});


