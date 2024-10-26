export const menuPage = (function () {
  const renderMenuPage = () => {
    const content = document.getElementById("content");

    // Title div
    const titleDiv = document.createElement("div");
    const title = document.createElement("h2");
    title.textContent = "Our Menu";
    titleDiv.appendChild(title);

    // Menu Categories
    const categoriesDiv = document.createElement("div");

    // Appetizers
    const appetizersDiv = document.createElement("div");
    const appetizersTitle = document.createElement("h3");
    appetizersTitle.textContent = "Appetizers";
    const appetizersList = document.createElement("ul");

    const appetizerItems = [
      { name: "Spring Rolls", price: "$8" },
      { name: "Garlic Bread", price: "$6" },
      { name: "Soup of the Day", price: "$7" },
    ];

    appetizerItems.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.name} - ${item.price}`;
      appetizersList.appendChild(listItem);
    });

    appetizersDiv.appendChild(appetizersTitle);
    appetizersDiv.appendChild(appetizersList);

    // Main Courses
    const mainsDiv = document.createElement("div");
    const mainsTitle = document.createElement("h3");
    mainsTitle.textContent = "Main Courses";
    const mainsList = document.createElement("ul");

    const mainItems = [
      { name: "Grilled Salmon", price: "$24" },
      { name: "Beef Steak", price: "$28" },
      { name: "Vegetarian Pasta", price: "$18" },
    ];

    mainItems.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.name} - ${item.price}`;
      mainsList.appendChild(listItem);
    });

    mainsDiv.appendChild(mainsTitle);
    mainsDiv.appendChild(mainsList);

    // Append all sections
    categoriesDiv.appendChild(appetizersDiv);
    categoriesDiv.appendChild(mainsDiv);
    content.appendChild(titleDiv);
    content.appendChild(categoriesDiv);
  };

  return { renderMenuPage };
})();
