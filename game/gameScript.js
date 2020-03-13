const RANDOM_QUOTE_API_URL = 'http://api.quotable.io/random';
const quoteDisplayElement = document.getElementById('quoteDisplay');
const quoteInputElement = document.getElementById('quoteInput');
const pointElement = document.getElementById('point');
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

let compareQouteArray = null;
let intervalID = null;
let totalScore = 0;
let index = 0;

quoteInputElement.addEventListener('input', () => {
  const arrayQuote = quoteDisplayElement.querySelectorAll('span');
  const arrayValue = quoteInputElement.value.split('');

  const arrayWord = quoteInputElement.value.split(' ');
  let compareWord = compareQouteArray[index];
  let word = arrayWord[arrayWord.length - 1];
  console.log(word);
  console.log(compareWord);
  if (compareWord == word) {
    console.log('matched' + index);
    totalScore++;
    index++;
    pointElement.innerHTML = totalScore;
  }

  let correct = true
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index];
    if (character == null) {
      characterSpan.classList.remove('correct');
      characterSpan.classList.remove('incorrect');
      correct = false;
    }
    else if (character === characterSpan.innerText) {
      characterSpan.classList.add('correct');
      characterSpan.classList.remove('incorrect');
    }
    else {
      characterSpan.classList.remove('correct');
      characterSpan.classList.add('incorrect');
      correct = false;
    }
  })

  if (correct) renderNewQuote();
})

function getRandomQuote() {
  return fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data => data.content)
}

async function renderNewQuote() {
  const quote = await getRandomQuote();
  compareQouteArray = quote.split(' ');
  index = 0;
  quoteDisplayElement.innerHTML = '';
  quote.split('').forEach(character => {
    const characterSpan = document.createElement('span');
    characterSpan.innerText = character;
    quoteDisplayElement.appendChild(characterSpan);
  })
  quoteInputElement.value = null;
  startTimer();
}

const timerElement = document.getElementById('timer');
let startTime;
function startTimer() {
  timerElement.innerText = 0;
  startTime = new Date();
  intervalID = setInterval(() => {
    let currentTime = getTimerTime()
    timer.innerText = currentTime;
    if (currentTime === 10) {
      clearInterval(intervalID);
      modal.style.display = "block";
    }
  }, 1000)
}


function getTimerTime() {
  return Math.floor((new Date() - startTime) / 1000);
}

renderNewQuote();