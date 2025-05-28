
document.addEventListener("DOMContentLoaded", () => {
  const stack = document.getElementById('card-stack');

  const cards = [
    { name: "Brand A", category: "Fashion", price: "$1000", tags: "#Style #Luxury #Korea" },
    { name: "Brand B", category: "Tech", price: "$500", tags: "#Innovation #Gadget #Future" },
    { name: "Brand C", category: "Food", price: "$800", tags: "#Vegan #Organic #Healthy" },
  ];

  function createCard(data, index) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.style.zIndex = cards.length - index;
    card.innerHTML = `
      <strong>${data.name}</strong><br/>
      <span>${data.category} · ${data.price}</span><br/>
      <small>${data.tags}</small>
    `;
    return card;
  }

  cards.forEach((data, index) => {
    const card = createCard(data, index);
    stack.appendChild(card);
  });

  document.getElementById("like").addEventListener("click", () => swipe("right"));
  document.getElementById("dislike").addEventListener("click", () => swipe("left"));

  function swipe(direction) {
    const cards = document.querySelectorAll(".card");
    const card = cards[cards.length - 1];
    if (!card) return;
    card.style.transform = direction === "right" ? "translateX(100vw) rotate(15deg)" : "translateX(-100vw) rotate(-15deg)";
    card.style.opacity = 0;
    setTimeout(() => card.remove(), 500);
  }
});
