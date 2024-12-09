// Adicionar algum efeito interativo, como hover, se necessário.
document.querySelectorAll('.foto').forEach(foto => {
    foto.addEventListener('click', () => {
        alert('Você clicou em uma imagem!');
    });
});
