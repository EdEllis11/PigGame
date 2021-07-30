let playerOne = document.querySelector(".player--0");
let playerTwo = document.querySelector(".player--1");
let scoreOne = document.querySelector("#score--0");
let scoreTwo = document.querySelector("#score--1");
let currentOne = document.querySelector("#current--0");
let currentTwo = document.querySelector("#current--1");

let diceEl = document.querySelector(".dice");
let rollBtn = document.querySelector(".btn--roll");
let holdBtn = document.querySelector(".btn--hold");
let newBtn = document.querySelector(".btn--new");

let playing, currentPlayer, currentScore, scores;

const initial = function(){

playing = true;
currentPlayer = 0;
currentScore = 0;
scores = [0,0];

scoreOne.textContent = 0;
scoreTwo.textContent =0;
currentOne.textContent = 0;
currentTwo.textContent = 0;


playerOne.classList.add("player--active");
playerTwo.classList.remove("player--active");
playerOne.classList.remove("player--winner");
playerTwo.classList.remove("player--winner");
diceEl.classList.add("hidden");

}

initial();

newBtn.addEventListener('click', initial);

let switchPlayers = function(){

  currentPlayer = currentPlayer === 0? 1 : 0;
  currentScore = 0;
  document.querySelector(`#current--${currentPlayer}`).textContent = 0;
  playerOne.classList.toggle("player-active");
  playerTwo.classList.toggle("player-active");
}

rollBtn.addEventListener("click", function(){
  if (playing){
    diceEl.classList.remove("hidden");
    let dice = Math.trunc(Math.random()*5)+1;
    diceEl.src = `dice-${dice}.png`;
   

    if (dice > 1){
      currentScore += dice;
      document.querySelector(`#current--${currentPlayer}`).textContent = currentScore;

    } else {
      document.querySelector(`#current--${currentPlayer}`).textContent = 0;
      switchPlayers();
    }
  }
})

holdBtn.addEventListener("click", function(){
  if (playing){
    scores[currentPlayer] += currentScore;
    document.querySelector(`#score--${currentPlayer}`).textContent = scores[currentPlayer];

  if (scores[currentPlayer] > 20){
    playing = false;
    document.querySelector(`.player--${currentPlayer}`).classList.remove("player--active");
    document.querySelector(`.player--${currentPlayer}`).classList.add("player--winner");
  } else {
    document.querySelector(`#current--${currentPlayer}`).textContent = 0;
    switchPlayers();
  }
  }
})

const Billy = {
  Age: 22,
  Thots: ["Jane", "Jill", "Alexia", "Beverly"],
  Deposits: [400, 50, 5000, 100, 30, 50],
};

console.log(Billy.Deposits.filter(each => each >99));