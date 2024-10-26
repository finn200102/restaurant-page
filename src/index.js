import "./styles.css";
import { homePage } from "./homepage.js";
import { menuPage } from "./menue.js";
import { aboutPage } from "./about.js";

homePage.renderHomepage();
//menuPage.renderMenuPage();
//aboutPage.renderAboutPage();

function clearPage() {
  const content = document.getElementById("content");
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", function () {
  clearPage();
  homePage.renderHomepage();
});
const menueButton = document.getElementById("menue-button");
menueButton.addEventListener("click", function () {
  clearPage();
  menuPage.renderMenuPage();
});
const aboutButton = document.getElementById("about-button");
aboutButton.addEventListener("click", function () {
  clearPage();
  aboutPage.renderAboutPage();
});
