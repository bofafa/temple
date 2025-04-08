function goToRandomWish() {
  const pages = ["love.html", "power.html", "money.html", "health.html", "career.html"];
  const randomPage = pages[Math.floor(Math.random() * pages.length)];
  window.location.href = randomPage;
}