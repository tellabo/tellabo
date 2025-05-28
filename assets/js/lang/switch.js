
document.addEventListener("DOMContentLoaded", function () {
  const langBtn = document.getElementById("lang-toggle");
  langBtn.addEventListener("click", function () {
    const currentLang = document.documentElement.lang;
    const newLang = currentLang === "en" ? "ko" : "en";
    document.documentElement.lang = newLang;
    location.href = newLang === "en" ? "index.html" : "index.ko.html";
  });
});
