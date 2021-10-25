const body = document.querySelector("body");
let imageIndex;

function getRandomNum(maxNum) {
  let num = parseInt(Math.random() * maxNum);
  if (num < 10) {
    num = "0" + num;
  }
  if (num === 0 || num == 00) num = `01`;
  return num;
}

function generateImg() {
  const timeDay = currentLangGreeting.generateGreeting(langSelected.value);

  imageIndex = getRandomNum(20);
  let link = `https://raw.githubusercontent.com/ShamshodIsayev/stage1-tasks/assets/images/${timeDay}/${imageIndex}.jpg`;
  return link;
}

function controlImgForBtns() {
  let timeDay = currentLangGreeting
    .generateGreeting(langSelected.value)
    .split(" ")[1];
  if (timeDay === "утро") {
    timeDay = "morning";
  } else if (timeDay === "день") {
    timeDay = "afternoon";
  } else if (timeDay === "вечер") {
    timeDay = "evening";
  } else if (timeDay === "ночь") {
    timeDay = "night";
  }
  let link = `https://raw.githubusercontent.com/ShamshodIsayev/stage1-tasks/assets/images/${timeDay}/${imageIndex}.jpg`;
  return link;
}

function setBg() {
  const imageLink = generateImg();
  body.style.backgroundImage = `url(${imageLink})`;
}
setBg();

//    slide next,prev

const rightArrow = document.querySelector(".slide-next");
const leftArrow = document.querySelector(".slide-prev");

rightArrow.addEventListener("click", (e) => {
  slideNext();
});

leftArrow.addEventListener("click", (e) => {
  slidePrev();
});

setTimeout(function slideInterval() {
  rightArrow.click()
  setTimeout(slideInterval , 15000);
}, 15000);

function slideNext() {
  imageIndex++;
  // control randomNum
  if (imageIndex > 20) imageIndex = 1;
  if (imageIndex < 10) imageIndex = "0" + imageIndex;
  //set background
  const newImg = newImage();
  newImg.addEventListener("load", (e) => {
    body.style.backgroundImage = `url(${newImg.src})`;
  });
}

function slidePrev() {
  imageIndex--;
  // control randomNum
  if (imageIndex < 1) imageIndex = 20;
  if (imageIndex < 10) imageIndex = "0" + imageIndex;
  //set background
  let newImg = newImage();
  newImg.addEventListener("load", (e) => {
    body.style.backgroundImage = `url(${newImg.src})`;
  });
}

function newImage() {
  const img = document.createElement("img");
  const imageLink = controlImgForBtns();
  img.src = `${imageLink}`;
  return img;
}
