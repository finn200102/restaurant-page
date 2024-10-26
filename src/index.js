import "./styles.css";
import { homepage } from "./homepage.js";
import { menuPage } from "./menue.js";
import { aboutPage } from "./about.js";

//homepage.renderHomepage();
//menuPage.renderMenuPage();
//aboutPage.renderAboutPage();

const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", function () {
  homepage.renderHomepage();
});
