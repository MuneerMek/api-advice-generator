const adviceID = document.querySelector(".advice-id span");
const adviceText = document.querySelector(".advice-text");
const button = document.querySelector("button");
let adviceList = {};

const getAdvice = async () => {
  const res = await fetch(
    "https://api.quotable.io/quotes/random?tags=inspirational|motivational|life|success&maxLength=100&limit=100"
  );
  const quotes = await res.json();
  adviceList = quotes;
  selectRandomQuote(adviceList);
};

const selectRandomQuote = (quotes) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  console.log(randomIndex);
  const randomQuote = quotes[randomIndex];
  displayQuote(randomQuote, randomIndex);
};

const displayQuote = (randomQuote, randomIndex) => {
  const index = randomIndex + 1;
  const quote = randomQuote.content;
  adviceID.innerText = index;
  adviceText.innerText = quote;
};

getAdvice();

button.addEventListener("click", function (e) {
  e.preventDefault();
  selectRandomQuote(adviceList);
});
