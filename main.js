const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "Japan.jpg") {
    myImage.setAttribute("src", "laterns.jpg");
  } else {
    myImage.setAttribute("src", "Japan.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Get ready for Japan, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Get ready for Japan, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();

});

const listItems = document.querySelectorAll("li");

function toggleDone(e){
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});

