function goToRandomWish() {
  const pages = ["love.html", "power.html", "money.html", "health.html", "career.html"];
  const randomPage = pages[Math.floor(Math.random() * pages.length)];
  window.location.href = randomPage;
}

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carousel-track");
  if (!track) return;

  let scrollAmount = 0;

  function animateCarousel() {
    scrollAmount += 0.5;
    if (scrollAmount >= track.scrollWidth / 2) {
      scrollAmount = 0;
    }
    track.style.transform = `translateX(-${scrollAmount}px)`;
    requestAnimationFrame(animateCarousel);
  }

  animateCarousel();
});
