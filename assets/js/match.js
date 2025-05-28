
document.addEventListener("DOMContentLoaded", () => {
    const stack = document.getElementById('card-stack');
    const cards = stack.querySelectorAll('.card');

    cards.forEach((card, index) => {
        card.style.zIndex = cards.length - index;
        card.addEventListener("click", () => {
            card.style.transform = "translateX(100%) rotate(20deg)";
            setTimeout(() => card.remove(), 300);
        });
    });
});
