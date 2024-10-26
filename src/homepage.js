export const homepage = (function () {
  const renderHomepage = () => {
    const content = document.getElementById("content");
    // Title div
    const titleDiv = document.createElement("div");
    const title = document.createElement("h2");
    title.textContent = "The best restaurant";
    titleDiv.appendChild(title);
    // Description div
    const descriptionDiv = document.createElement("div");
    const descriptionTitle = document.createElement("h3");
    descriptionTitle.textContent = "Description:";
    const descriptionParagraph = document.createElement("p");
    descriptionParagraph.textContent =
      "An unique variety of food from all around the world that will educate your tastebuts";
    descriptionDiv.appendChild(descriptionTitle);
    descriptionDiv.appendChild(descriptionParagraph);
    // Review div
    const reviewDiv = document.createElement("div");
    const reviewTitle = document.createElement("h3");
    reviewTitle.textContent = "Review:";
    const reviewOne = document.createElement("div");
    const reviewContentOne = document.createElement("p");
    reviewContentOne.textContent = "The food is amazing.";
    reviewOne.appendChild(reviewContentOne);
    const reviewTwo = document.createElement("div");
    const reviewContentTwo = document.createElement("p");
    reviewContentTwo.textContent = "The food is the best";
    reviewTwo.appendChild(reviewContentTwo);
    const reviewThree = document.createElement("div");
    const reviewContentThree = document.createElement("p");
    reviewContentThree.textContent = "The food is out of this world.";
    reviewThree.appendChild(reviewContentThree);
    reviewDiv.appendChild(reviewTitle);
    reviewDiv.appendChild(reviewOne);
    reviewDiv.appendChild(reviewTwo);
    reviewDiv.appendChild(reviewThree);
    content.appendChild(titleDiv);
    content.appendChild(descriptionDiv);
    content.appendChild(reviewDiv);
  };
  return { renderHomepage };
})();
