// 1. Select ELEMENTS from the DOM
const pageTitle = document.getElementById("page-title");
const subtitle = document.getElementById("subtitle");
const changeTitleButton = document.getElementById("change-title-button");
const colorButton = document.getElementById("change-button");
const addCardButton = document.getElementById("add-card-button");
const clearCardButton = document.getElementById("clear-cards-button");
const addCustomCardButton = document.getElementById("add-custom-card-button");
const customTextInput = document.getElementById("customer-text-input");
const cardContainer = document.getElementById("cards-container");
const toggleImageButton = document.getElementById("toggle-image-button");
const image = document.getElementById("main-image");
const resizeBox = document.getElementById("resize-box");
const resizeButton = document.getElementById("resize-button");
const addItemButton = document.getElementById("add-item-button");
const removeItemButton = document.getElementById("remove-item-button");
const list = document.getElementById("item-list");

// 2. Change Title Text on Click
changeTitleButton.addEventListener("click", function () {
  if (pageTitle.innerText === "DOM Manipulation Playground") {
    pageTitle.innerText = "DOM in Action";
    subtitle.innerText = "Nice! You change the DOM using JavaScript";
  } else {
    pageTitle.innerText = "DOM Manipulation Playground";
    subtitle.innerText = "Click the button below to see the DOM in action.!!!";
  }
});

// 3. Random Background Color
colorButton.addEventListener("click", function () {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});

// 4. Helper function to create a card
function createCard(text) {
  const card = document.createElement("div");
  card.className = "card";

  const content = document.createElement("p");
  content.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete Card";
  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", function () {
    card.remove();
  });

  card.appendChild(content);
  card.appendChild(deleteBtn);

  return card;
}

// 5. Add default card
addCardButton.addEventListener("click", function () {
  const card = createCard("I am a dynamically created card.");
  cardContainer.appendChild(card);
});

// 6. Add custom card
addCustomCardButton.addEventListener("click", function () {
  const value = customTextInput.value;
  if (value !== "") {
    const card = createCard(value);
    cardContainer.appendChild(card);
    customTextInput.value = "";
  }
});

// 7. Clear all cards
clearCardButton.addEventListener("click", function () {
  cardContainer.innerHTML = "";
});

// 8. Toggle image
let showingDog3 = true;

toggleImageButton.addEventListener("click", function () {
  if (showingDog3 === true) {
    image.src = "./assets/AIdog1.png";
    showingDog3 = false;
  } else {
    image.src = "./assets/AIdog3.png";
    showingDog3 = true;
  }
});

// 9. Resize box
resizeButton.addEventListener("click", function () {
  if (resizeBox.style.transform === "scale(1.5)") {
    resizeBox.style.transform = "scale(1)";
  } else {
    resizeBox.style.transform = "scale(1.5)";
  }
});

// 10. Add list item
addItemButton.addEventListener("click", function () {
  list.innerHTML += "<li>New List Item</li>";
});

// 11. Remove last list item
removeItemButton.addEventListener("click", function () {
  const items = list.getElementsByTagName("li");
  if (items.length > 0) {
    list.removeChild(items[items.length - 1]);
  }
});