const msgEl = document.getElementById('msg');

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;
const randomNum = getRandomNumber();
console.log('Number: ', randomNum);

var SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
let recognition = new window.SpeechRecognition();

//Start recognition and game
recognition.start();
//Capture user speak
const onSpeak = (e) => {
  const msg = e.results[0][0].transcript;
  writeMassage(msg);
  checkNumber(msg);
};

const writeMassage = (massage) => {
  msgEl.innerHTML = `
  <div>You Said: </div>
  <span class="box">${massage}</span>
  `;
};

const checkNumber = (message) => {
  const num = +message;
  if (Number.isNaN(num)) {
    msgEl.innerHTML += '<div>That is not a valid number</div>';
    return;
  }
  if (num > 100 || num < 1) {
    msgEl.innerHTML += '<div>Number must be between 1 and 100</div>';
    return;
  }

  if (num === randomNum) {
    document.body.innerHTML = `
    <h2>Congrats! You have guessed the number! <br><br>
    It was ${num}</h2>
    <button class="play-again" id="play-again">Play Again</button>`;
  } else if (num > randomNum) {
    msgEl.innerHTML += '<div> GO LOWER</div>';
  } else {
    msgEl.innerHTML += '<div> GO HIGHER</div>';
  }
};

// console.log(recognition);
// recognition.addEventListener('result', onSpeak);

recognition.addEventListener('result', onSpeak);

// End SR service
recognition.addEventListener('end', () => recognition.start());

document.body.addEventListener('click', (e) => {
  if (e.target.id === 'play-again') window.location.reload();
});
