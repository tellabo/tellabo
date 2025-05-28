
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card-match");
  cards.forEach(card => {
    card.addEventListener("click", () => {
      card.style.transform = "translateX(120%) rotate(15deg)";
      card.style.transition = "transform 0.5s ease";
      setTimeout(() => card.remove(), 400);
    });
  });
});
