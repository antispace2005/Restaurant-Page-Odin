import "./styles.css";
import homepage from "./homepage";
import menu from "./menu";
let contentElement = document.getElementById("content");

(() => {
  contentElement.replaceWith(homepage);
  contentElement = document.getElementById("content");

  const homeButton = document.getElementById("homeNav");
  homeButton.addEventListener("click", () => {
    contentElement.replaceWith(homepage);
    contentElement = document.getElementById("content");
  });
  const menuButton = document.getElementById("menuNav");
  menuButton.addEventListener("click", () => {
    contentElement.replaceWith(menu);
    contentElement = document.getElementById("content");

    console.log("test");
  });
})();
