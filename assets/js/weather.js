// https://api.openweathermap.org/data/2.5/weather?q=Минск&lang=ru&appid=f642c0598069526d32d698afd97813da&units=metric
const weatherDescription = document.querySelector(".weather-description");
const temperature = document.querySelector(".temperature");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const weatherIcon = document.querySelector(".weather-icon");
const weatherError = document.querySelector(".weather-error");

async function getWeather(city = "Minsk", lang = "en") {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${lang}&appid=f642c0598069526d32d698afd97813da&units=metric`
    );
    const data = await res.json();

    if (res.status / 100 !== 2) {
      weatherError.textContent = `Error! city not found for ${inputCity.value};`;
      temperature.textContent = ``;
      weatherDescription.textContent = ``;
      wind.textContent = "";
      humidity.textContent = "";
      weatherIcon.style.display = "none";
    } else {
      weatherError.textContent = "";
    }
    return data;
  } catch (error) {
    return error;
  }
}

initializeDataWeather();

async function initializeDataWeather(city = "Minsk", lang = "en") {
  const data = await getWeather(city, lang);
  if (data.message === "city not found") {
    return;
  }
  const description = data.weather[0].description;
  const tempData = data.main.temp;
  const humiditData = data.main.humidity;
  const windData = data.wind.speed;
  const icon = data.weather[0].id;

  temperature.textContent = tempData.toFixed() + `°C`;
  weatherDescription.textContent = description;
  weatherIcon.style.display = "inline-block";
  weatherIcon.classList.add(`owf-${icon}`);

  if (lang === "en") {
    wind.textContent = `Wind speed: ${windData.toFixed()}m/s`;
    humidity.textContent = `Humidity: ${humiditData}%`;
  } else {
    wind.textContent = `Скорость ветра: ${windData.toFixed()}m/s`;
    humidity.textContent = `Влажность: ${humiditData}%`;
  }
}

inputCity.value = "Minsk";
inputCity.addEventListener("change", async (e) => {
  const res = await initializeDataWeather(inputCity.value, langSelected.value);
  console.log(res);
});

window.addEventListener('beforeunload', e => {
  console.log('e');
  localStorage.setItem('nameCity', inputCity.value)
})

window.addEventListener('load', e => {
  if (localStorage.getItem('nameCity')) {
    const result = localStorage.getItem('nameCity')
    inputCity.value = result
  }
})
