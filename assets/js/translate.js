let greeting = document.querySelector(".greeting");
let name = document.querySelector(".name");
let langSelected = document.getElementById("lang");
let inputCity = document.querySelector(".city");
const date = new Date();

class greetingTranslation {
  constructor() {}
  generateGreeting(lang = "en") {
    if (lang === "en") {
      if (date.getHours() >= 5 && date.getHours() < 12) {
        return `Good morning`;
      } else if (date.getHours() >= 12 && date.getHours() <= 17) {
        return `Good afternoon`;
      } else if (date.getHours() >= 18 && date.getHours() <= 21) {
        return `Good evening`;
      } else if (date.getHours() >= 22 && date.getHours() <= 23) {
        return `Good night`;
      } else if (date.getHours() >= 0 && date.getHours() <= 4) {
        return `Good night`;
      }
    } else if (lang === "ru") {
      if (date.getHours() >= 5 && date.getHours() < 12) {
        return `Доброе утро`;
      } else if (date.getHours() >= 12 && date.getHours() <= 17) {
        return `Добрый день`;
      } else if (date.getHours() >= 18 && date.getHours() <= 21) {
        return `Добрый вечер`;
      } else if (date.getHours() >= 22 && date.getHours() <= 23) {
        return `Добрый ночь`;
      } else if (date.getHours() >= 0 && date.getHours() <= 4) {
        return `Добрый ночь`;
      }
    }
  }
}

langSelected.addEventListener("change", (e) => {
  greeting.textContent = currentLangGreeting.generateGreeting(e.target.value);
  if (e.target.value === "en") {
    showDate();
    name.placeholder = "[Enter name]";
    initializeDataWeather(inputCity.value, "en");
    initializeQuotes();
    initializeSettings(langSelected.value)
  } else if (e.target.value === "ru") {

    showDate();
    name.placeholder = "[Введите имя]";
    initializeDataWeather(inputCity.value, "ru");
    initializeQuotes(langSelected.value);
    initializeSettings(langSelected.value)
  }
});
