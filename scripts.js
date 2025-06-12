document.addEventListener("DOMContentLoaded", function () {
  const enterButton = document.getElementById("enterButton");
  const welcome = document.getElementById("welcome");
  const mainContent = document.getElementById("mainContent");
  const menuButton = document.getElementById("menuButton");
  const menu = document.getElementById("menu");

  enterButton.addEventListener("click", function () {
    welcome.classList.add("hidden");
    mainContent.classList.remove("hidden");
  });

  menuButton.addEventListener("click", () => {
    menu.classList.toggle("menu-hidden");
  });
});