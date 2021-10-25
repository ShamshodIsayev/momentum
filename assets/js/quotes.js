const quoteOut = document.querySelector(".quote");
const authorOut = document.querySelector(".author");
const changeQuote = document.querySelector(".change-quote");
let indexOfQuotes;

async function fetchQuotes(lang = "en") {
  if (lang === "en") {
    try {
      const res = await fetch("./data/data.json");
      const data = await res.json();
      return data;
    } catch (error) {
      return error;
    }
  } else if (lang === "ru") {
    try {
      const res = await fetch("./data/data-ru.json");
      const data = await res.json();
      return data;
    } catch (error) {
      return error;
    }
  }
}

async function createRandomIndex(lang) {
  try {
    const data = await fetchQuotes(lang);
    const num = parseInt(Math.random() * data.length - 1);
    return num;
  } catch (error) {
    return error;
  }
}

async function returnQuotes(lang) {
  try {
    const data = await fetchQuotes(lang);
    const randomIndex = await createRandomIndex(lang);
    indexOfQuotes = randomIndex;
    return data[randomIndex];
  } catch (error) {
    return error;
  }
}

async function initializeQuotes(lang = "en") {
  const data = await returnQuotes(lang);
  showQuotes(data.text, data.author);
}

function showQuotes(quote, author) {
  quoteOut.textContent = `"${quote}"`;
  authorOut.textContent = author;
  return;
}
initializeQuotes();

changeQuote.addEventListener("click", (e) => {
  initializeQuotes(langSelected.value);
});
