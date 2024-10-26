export const aboutPage = (function () {
  const renderAboutPage = () => {
    const content = document.getElementById("content");

    // Title div
    const titleDiv = document.createElement("div");
    const title = document.createElement("h2");
    title.textContent = "About Us";
    titleDiv.appendChild(title);

    // Story div
    const storyDiv = document.createElement("div");
    const storyTitle = document.createElement("h3");
    storyTitle.textContent = "Our Story";
    const storyText = document.createElement("p");
    storyText.textContent =
      "Founded in 2010, our restaurant brings authentic flavors from around the world to your table. Our chefs have trained internationally to perfect their craft.";
    storyDiv.appendChild(storyTitle);
    storyDiv.appendChild(storyText);

    // Hours div
    const hoursDiv = document.createElement("div");
    const hoursTitle = document.createElement("h3");
    hoursTitle.textContent = "Opening Hours";
    const hoursList = document.createElement("ul");
    const hours = [
      "Monday - Friday: 11am - 10pm",
      "Saturday: 10am - 11pm",
      "Sunday: 10am - 9pm",
    ];

    hours.forEach((time) => {
      const listItem = document.createElement("li");
      listItem.textContent = time;
      hoursList.appendChild(listItem);
    });

    hoursDiv.appendChild(hoursTitle);
    hoursDiv.appendChild(hoursList);

    // Contact div
    const contactDiv = document.createElement("div");
    const contactTitle = document.createElement("h3");
    contactTitle.textContent = "Contact Us";
    const contactInfo = document.createElement("p");
    contactInfo.textContent =
      "Phone: (555) 123-4567\nEmail: info@restaurant.com\nAddress: 123 Food Street, Cuisine City";
    contactDiv.appendChild(contactTitle);
    contactDiv.appendChild(contactInfo);

    // Append all sections
    content.appendChild(titleDiv);
    content.appendChild(storyDiv);
    content.appendChild(hoursDiv);
    content.appendChild(contactDiv);
  };

  return { renderAboutPage };
})();
