const settings = document.getElementById('settings')
const settingsSpan = document.querySelector('.settings-span')
const settingsLi = document.querySelectorAll('.settings-li')
let playerContainer = document.querySelector('.player')
let weatherContainer = document.querySelector('.weather')
let quotesContainer = document.querySelector('.quotes')
let audioPlayerSet = document.querySelector('.audioplayerSet')
let weatherSet = document.querySelector('.weatherSet')
let quotesSet  = document.querySelector('.quotesSet')

settingsSpan.addEventListener('click', e => {
  settings.classList.toggle('active')
})

for (let li of settingsLi) {
  li.addEventListener('click', function () {
    this.classList.toggle('active')
    if (this.classList.contains('audioplayerSet')) {
      playerContainer.classList.toggle('active')
    }
    else if (this.classList.contains('weatherSet')) {
      weatherContainer.classList.toggle('active')
    } else if(this.classList.contains('quotesSet')){
      quotesContainer.classList.toggle('active')
    }
  })
}


function initializeSettings(lang) {
  if (lang === 'en') {
    audioPlayerSet.textContent = 'Audioplayer'
    weatherSet.textContent = 'Weather'
    quotesSet.textContent = 'Quotes'
    settingsSpan.textContent = 'Settings'
  } else if (lang === 'ru') {
    audioPlayerSet.textContent = 'Аудиоплеер'
    weatherSet.textContent = 'Погода'
    quotesSet.textContent = 'Цитата'
    settingsSpan.textContent = 'Настройки'
  }
}