const timeOut = document.querySelector(".time");
const dateOut = document.querySelector(".date");

const options = {
  weekday: "long",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
};
dateOut.textContent;

//  TIME

function showTime() {
  let timeInterval = setTimeout(function tick() {
    timeOut.textContent = returnCurrentTime();
    timeInterval = setTimeout(tick, 1000);
  }, 1000);
}

function showDate() {
  let dateInterval = setTimeout(function tick() {
    dateOut.textContent = returnCurrentDate();
    dateInterval = setTimeout(tick, 1000);
  }, 1000);
}

function returnCurrentTime() {
  return new Date().toLocaleTimeString();
}

function returnCurrentDate() {
  if (langSelected.value === "en") {
    return new Date().toLocaleDateString("en-US", options);
  } else if (langSelected.value === "ru") {
    return new Date().toLocaleDateString("ru-RU", options);
  }
}

showTime();
showDate();
