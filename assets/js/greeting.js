const textGreet = document.querySelector(".name");
let currentLangGreeting = new greetingTranslation();

greeting.textContent = currentLangGreeting.generateGreeting(langSelected.value);

//  SET USERNAME
textGreet.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    setNametoStorage(textGreet.value);
  }
});

function setNametoStorage(name) {
  return localStorage.setItem("name", name);
}

function getNameFromStorage() {
  if (localStorage.getItem("name")) {
    const result = localStorage.getItem("name");
    textGreet.value = result;
    return localStorage.getItem("name");
  }
}

window.addEventListener("beforeunload", (e) => {
  setNametoStorage(textGreet.value);
});

window.addEventListener("load", getNameFromStorage);
