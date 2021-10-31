const quotes = [
  {
    quote: "중단하는 자는 승리하지 못한다.",
    author: "",
  },
  {
    quote: "If you decide to go, then you gotta just get on with it.",
    author: "Matt Kowalski, Gravity",
  },
  {
    quote:
      "Sit back, enjoy the ride. You gotta Plant both your feet on the ground and start live' life.",
    author: "Matt Kowalski, Gravity",
  },
  {
    quote: "Either way, whichever way... no harm, no foul.",
    author: "Dr. Ryan Stone, Gravity",
  },
  {
    quote: "Because either way, it'll be one hell of a ride. I'm ready.",
    author: "Dr. Ryan Stone, Gravity",
  },
  {
    quote: "Be realistic, demand the impossible.",
    author: "Che Guevara",
  },
  {
    quote:
      "노력한다고 항상 성공 할 수는 없겠지. 하지만 성공한 사람은 모두 노력했다는 걸 기억해둬.",
    author: "카모가와 겐지, 더파이팅",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
