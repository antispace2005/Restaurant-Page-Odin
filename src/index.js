import "./styles.css";
import homepage from "./homepage";
import menu from "./menu";
let contentElement = document.getElementById("content");
const titleElement = document.querySelector("title");
import about from "./about";
(() => {
  contentElement.replaceWith(homepage.cloneNode(true));
  contentElement = document.getElementById("content");
  titleElement.textContent = "HomePage";

  const homeButton = document.getElementById("homeNav");
  homeButton.addEventListener("click", () => {
    contentElement.replaceWith(homepage.cloneNode(true));
    contentElement = document.getElementById("content");
    titleElement.textContent = "HomePage";
  });
  const menuButton = document.getElementById("menuNav");
  menuButton.addEventListener("click", () => {
    contentElement.replaceWith(menu.cloneNode(true));
    contentElement = document.getElementById("content");
    titleElement.textContent = "Menu";
  });
  const aboutButton = document.getElementById("aboutNav");
  aboutButton.addEventListener("click", () => {
    contentElement.replaceWith(about.cloneNode(true));
    contentElement = document.getElementById("content");
    titleElement.textContent = "About";
  });
})();
