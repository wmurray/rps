var yourScore = 0;
var botScore = 0;

document.getElementById('rock').onclick=throwRock;
document.getElementById('paper').onclick=throwPaper;
document.getElementById('scissors').onclick=throwScissors;

function throwRock() {
  var randomWeapon = botWeapon();
  if (randomWeapon === "scissors") {
    playerWin();
  } else if (randomWeapon === "paper") {
    computerWin();
  } else {
    youTied();
  }
}

function throwPaper() {
  var randomWeapon = botWeapon();
  if (randomWeapon === "rock") {
    playerWin();
  } else if (randomWeapon === "scissors") {
    computerWin();
  } else {
    youTied();
  }

}

function throwScissors() {
  var randomWeapon = botWeapon();
  if (randomWeapon === "paper") {
    playerWin();
  } else if (randomWeapon === "rock") {
    computerWin();
  } else {
    youTied();
  }
}

function botWeapon() {
  var randomWeapon = Math.random();
    if (randomWeapon < 0.333) {
      randomWeapon = "scissors";
    } else if (randomWeapon > .67) {
      randomWeapon = "rock";
    } else {
      randomWeapon = "paper";
    }
  return randomWeapon;
}

function playerWin() {
  yourScore+=1;
  document.getElementById('humanScore').textContent=yourScore;
  document.getElementById('status').innerHTML="<p>You won the round.</p>";
}

function computerWin() {
  botScore+=1;
  document.getElementById('computerScore').textContent=botScore;
  document.getElementById('status').innerHTML="<p>The Computer won the round.</p>"
}

function youTied() {
  document.getElementById('status').innerHTML="<p>The round was a tie.</p>"
}