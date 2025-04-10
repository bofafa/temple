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

