document.getElementById("enterButton").addEventListener("click", function () {
  document.getElementById("welcome").classList.add("hidden");
  document.getElementById("mainContent").classList.remove("hidden");
});

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});