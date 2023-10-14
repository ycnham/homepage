const quotes = 
[
  {
    quote: "A rose by any other name would smell as sweet.",
    author: "William Shakespeare",
  },
  {
    quote: "All that glitters is not gold.",
    author: "William Shakespeare",
  },
  {
    quote: "All the world’s a stage, and all the men and women merely players.",
    author: "William Shakespeare",
  },
  {
    quote: "Ask not what your country can do for you; ask what you can do for your country.",
    author: "John Kennedy",
  },
  {
    quote: "Eighty percent of success is showing up.",
    author: "Woody Allen",
  },
  {
    quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
  },
  {
    quote: "If you want something done right, do it yourself.",
    author: "Charles-Guillaume Étienne",
  },
  {
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
  },
  {
    quote: "Nothing is certain except for death and taxes.",
    author: "Benjamin Franklin",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Ghandi",
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
