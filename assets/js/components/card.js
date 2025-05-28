
document.addEventListener("DOMContentLoaded", () => {
  const stack = document.getElementById("card-stack");
  const cards = [
    { name: "Brand Alpha", image: "assets/images/sample1.jpg", desc: "Minimal skincare, clean ingredients" },
    { name: "Brand Beta", image: "assets/images/sample2.jpg", desc: "Smart tech for creative minds" },
    { name: "Brand Gamma", image: "assets/images/sample3.jpg", desc: "Organic lifestyle and wellness" }
  ];

  cards.reverse().forEach((data, i) => {
    const card = document.createElement("div");
    card.className = `absolute w-full h-full bg-white rounded-2xl shadow-lg transform transition duration-300 ease-in-out p-6 flex flex-col justify-end cursor-pointer`;
    card.style.zIndex = i + 1;
    card.innerHTML = `
      <img src="\${data.image}" class="absolute top-0 left-0 w-full h-3/5 object-cover rounded-t-2xl">
      <div class="mt-auto relative z-10">
        <h2 class="text-xl font-bold text-gray-800 mb-1">\${data.name}</h2>
        <p class="text-sm text-gray-600">\${data.desc}</p>
      </div>
    `;
    stack.appendChild(card);
  });

  const likeBtn = document.getElementById("like");
  const dislikeBtn = document.getElementById("dislike");

  function swipe(direction) {
    const card = stack.lastElementChild;
    if (!card) return;

    card.style.transition = "transform 0.6s ease-out, opacity 0.3s ease";
    card.style.transform = direction === "right" ? "translateX(100%) rotate(15deg)" : "translateX(-100%) rotate(-15deg)";
    card.style.opacity = "0";
    setTimeout(() => card.remove(), 500);
  }

  likeBtn.addEventListener("click", () => swipe("right"));
  dislikeBtn.addEventListener("click", () => swipe("left"));
});
