// scripts.js
function handleClick(clickedBox) {
    // Remove a classe 'clicked' de todas as caixas
    document.querySelectorAll('.box').forEach(box => box.classList.remove('clicked'));
    
    // Adiciona a classe 'clicked' apenas à caixa clicada
    clickedBox.classList.add('clicked');
}