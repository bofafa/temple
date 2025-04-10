function goToRandomWish() {
  const pages = ["love.html", "power.html", "money.html", "health.html", "career.html"];
  const randomPage = pages[Math.floor(Math.random() * pages.length)];
  window.location.href = randomPage;
}

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("hamburgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (toggleButton && mobileMenu) {
    toggleButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("d-none");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const coin = document.getElementById("coin");
  const result = document.getElementById("coinResult");

  if (coin) {
    coin.addEventListener("click", () => {
      coin.classList.add("flipping");
      setTimeout(() => {
        const isHeads = Math.random() < 0.5;
        result.textContent = isHeads ? "Heads" : "Tails";
        coin.classList.remove("flipping");
      }, 600);
    });
  }
});
