const enterButton = document.getElementById("enterButton");
const welcome = document.getElementById("welcome");
const mainContent = document.getElementById("mainContent");
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

enterButton.addEventListener("click", () => {
  welcome.style.animation = "fadeOut 2s forwards";
  setTimeout(() => {
    welcome.classList.add("hidden");
    mainContent.classList.remove("hidden");
  }, 2000);
});

menuButton.addEventListener("click", () => {
  menu.classList.toggle("menu-hidden");
});