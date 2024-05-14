let userScore = 0; //variables created initially to access score of user and comp
let compScore = 0;

const choices = document.querySelectorAll(".choice"); //access all 3 choices
const msg = document.querySelector("#msg"); //access the msg paragraphs and score para to show winner

const userScorePara = document.querySelector("#user-score"); //access userscore from scoreboard
const compScorePara = document.querySelector("#comp-score");//access compscore

const genCompChoice = () => { //choose any choice from rock,paper,scissor
  const options = ["rock", "paper", "scissors"]; //store choices in array to use random method.
  const randIdx = Math.floor(Math.random() * 3); //random method generate any value from 0 to 1.
  return options[randIdx]; // We will generate whole number using math.floor and treat it as index of array for choice
}; //we want it in range 0-2 so multiplied by 3.

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again."; //function prints game was draw
  msg.style.backgroundColor = "#081b31"; //at draw game bg color remains same
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) { //if userwin is true then you win
    userScore++;
    userScorePara.innerText = userScore; //user score is updated through innerText
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`; //use innerText to show user win
    msg.style.backgroundColor = "green"; //bg color is changed
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => { //generating random choice from computer
  //input is user choice
  const compChoice = genCompChoice(); 

  if (userChoice === compChoice) {
    //Draw Game
    drawGame(); //other function for draw game
  } else {
    let userWin = true; //variable created. If user win then set it to true
    if (userChoice === "rock") {
      //scissors, paper can be comp choice
      userWin = compChoice === "paper" ? false : true; //if comp choice was paper then comp win
    } else if (userChoice === "paper") {
      //rock, scissors can be comp choice
      userWin = compChoice === "scissors" ? false : true; //if compchoice is scissor then comp win
    } else {
      //rock, paper can be comp choice
      userWin = compChoice === "rock" ? false : true; //if compchoice is rock then comp wins
    }
    showWinner(userWin, userChoice, compChoice); //show winner 
  }
};

choices.forEach((choice) => { //event listener for each choice
  choice.addEventListener("click", () => { //whenever we click on a choice we are accessing id of that choice through getAttribute
    const userChoice = choice.getAttribute("id");
    playGame(userChoice); //after user choice we are calling computer's choice
  });
});

//LIST CONCEPTS USED
