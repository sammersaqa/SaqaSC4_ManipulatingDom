// 1. Select elements
const pageTitle = document.getElementById("page-title");
const subtitle = document.getElementById("subtitle");
const changeTitleButton = document.getElementById("change-title-button");
const colorButton = document.getElementById("change-button");
const addCardButton = document.getElementById("add-card-button");
const clearCardButton = document.getElementById("clear-cards-button");
const addCustomCardButton = document.getElementById("add-custom-card-button");
const customTextInput = document.getElementById("customer-text-input");
const cardContainer = document.getElementById("cards-container");
const image = document.getElementById("main-image");
const toggleImageButton = document.getElementById("toggle-image-button");
const resizeBox = document.getElementById("resize-box");
const resizeButton = document.getElementById("resize-button");
const list = document.getElementById("item-list");
const addItemButton = document.getElementById("add-item-button");
const removeItemButton = document.getElementById("remove-item-button");

// Track which image is showing
let showingDog3 = true;

// 2. Change title
changeTitleButton.addEventListener("click", function () {
  if (pageTitle.innerText === "DOM Manipulation Playground") {
    pageTitle.innerText = "DOM in Action";
    subtitle.innerText = "Nice! You changed the DOM using JavaScript";
  } else {
    pageTitle.innerText = "DOM Manipulation Playground";
    subtitle.innerText = "Click the button below to see the DOM in action.!!!";
  }
});

// 3. Change background color
colorButton.addEventListener("click", function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

// 4. Add card
addCardButton.addEventListener("click", function () {
  cardContainer.innerHTML += "<div class='card'>This is a new card!</div>";
});

// 5. Clear cards
clearCardButton.addEventListener("click", function () {
  cardContainer.innerHTML = "";
});

// 6. Add custom card
addCustomCardButton.addEventListener("click", function () {
  const userText = customTextInput.value;
  if (userText !== "") {
    cardContainer.innerHTML += "<div class='card'>" + userText + "</div>";
    customTextInput.value = "";
  }
});

// 7. Toggle image (fixed)
toggleImageButton.addEventListener("click", function () {
  if (showingDog3 === true) {
    image.src = "./assets/AIdog1.png";
    showingDog3 = false;
  } else {
    image.src = "./assets/AIdog3.png";
    showingDog3 = true;
  }
});

// 8. Resize box
resizeButton.addEventListener("click", function () {
  if (resizeBox.style.transform === "scale(1.5)") {
    resizeBox.style.transform = "scale(1)";
  } else {
    resizeBox.style.transform = "scale(1.5)";
  }
});

// 9. Add list item
addItemButton.addEventListener("click", function () {
  list.innerHTML += "<li>New List Item</li>";
});

// 10. Remove last list item
removeItemButton.addEventListener("click", function () {
  const items = list.getElementsByTagName("li");
  if (items.length > 0) {
    list.removeChild(items[items.length - 1]);
  }
});