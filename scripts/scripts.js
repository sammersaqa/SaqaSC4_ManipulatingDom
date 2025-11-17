function changeTitle() {
  document.getElementById("main-title").textContent = "Title Changed!";
}

function changeDescription() {
  document.getElementById("description").innerHTML = "<em>Description updated with emphasis.</em>";
}

function toggleBox1() {
  const box = document.getElementById("box1");
  box.style.display = box.style.display === "none" ? "block" : "none";
}

function changeBox2Color() {
  document.getElementById("box2").style.backgroundColor = "#f9c74f";
}

function resizeBox3() {
  const box = document.getElementById("box3");
  const currentScale = box.style.transform;

  if (currentScale === "scale(1.5)") {
    box.style.transform = "scale(1)";
  } else {
    box.style.transform = "scale(1.5)";
  }
}

function changeImage() {
  const img = document.getElementById("image");
  const currentSrc = img.src;

  // Toggle between two images
  if (currentSrc.includes("150")) {
    img.src = "./assets/AIDog2.png";
  } else {
    img.src = "./assets/AIDog3.png";
  }
}



function addListItem() {
  const li = document.createElement("li");
  li.textContent = "New Item";
  document.getElementById("list").appendChild(li);
}

function removeListItem() {
  const list = document.getElementById("list");
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
}

function readInput() {
  const input = document.getElementById("inputField").value;
  alert("You typed: " + input);
}

function resetAll() {
  document.getElementById("main-title").textContent = "Welcome to DOM Playground";
  document.getElementById("description").textContent = "Click buttons below to manipulate the page.";
  document.getElementById("box1").style.display = "block";
  document.getElementById("box2").style.backgroundColor = "";
  document.getElementById("box3").style.transform = "scale(1)";
  document.getElementById("image").src = "https://via.placeholder.com/150";
  document.getElementById("list").innerHTML = "<li>Item A</li><li>Item B</li>";
  document.getElementById("inputField").value = "";
}