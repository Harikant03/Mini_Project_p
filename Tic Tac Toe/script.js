const gameCells = document.querySelectorAll(".cell");
const player1 = document.querySelector(".player1");
const player2 = document.querySelector(".player2");
const restartBtn = document.querySelector(".restartBtn");
const alertBox = document.querySelector(".alertBox");

//making variables
let currentPlayer = "X";
let nextPlayer = "O";
let playerTern = currentPlayer;

 player1.textContent=`Player1:${currentPlayer}`;
 player2.textContent=`Player2:${nextPlayer}`;

//function to start game
const startGame = () => {
  gameCells.forEach((cell) => {
    cell.addEventListener("click", handleClick);
  });
};
const handleClick =(e)=>{
  if (e.target.textContent === "") {
        e.target.textContent = playerTern;
        // 🎨 Add color based on player
    if (playerTern === currentPlayer) {
      e.target.style.color = "orange"; // Player 1 (X)
    } else {
      e.target.style.color = "green";  // Player 2 (O)
    }
        if (checkWin()) {
          //console.log(`${playerTern} is a winner!`);
          showAlert(`${playerTern} is a winner!`);
          disableCells();
        }
        else if(checkTie()){
          //console.log(`It's a Tie!`);
          showAlert(`It's a Tie!`);
          disableCells();
        }
         else {
          changePlayerTern(); // turn changes only if no winner yet or tie.
          showAlert(`Turn for Player:${playerTern}`);
        }
      }
}
//function to change player's turns
const changePlayerTern = () => {
  playerTern = playerTern === currentPlayer ? nextPlayer : currentPlayer;
};
//Function to Check Win
const checkWin = () => {
  const winingConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winingConditions.length; i++) {
    const [pos1, pos2, pos3] = winingConditions[i];
    if (
      gameCells[pos1].textContent !== "" &&
      gameCells[pos1].textContent === gameCells[pos2].textContent &&
      gameCells[pos2].textContent === gameCells[pos3].textContent
    ) {
      return true;
    }
  }
  return false;
}; 
//Function to Check  for a Tie
const checkTie =()=>{
  let emptyCellsCount=0;
  gameCells.forEach(cell=>{
    if(cell.textContent===''){
      emptyCellsCount++;
    }
  });
  return emptyCellsCount ===0 && !checkWin();
}
//function to disable game-board cell after a win or Tie
const disableCells =()=>{
  gameCells.forEach(cell=>{
    cell.removeEventListener('click', handleClick);
    cell.classList.add('disabled');
  });

}
//function to restart game
const restartGame=()=>{
  gameCells.forEach(cell=>{
    cell.textContent='';
    cell.classList.remove('disabled');
  });
  startGame();
}
restartBtn.addEventListener('click',restartGame);
//function to show alert. 
const showAlert=(msg)=>{
  alertBox.style.display="block"; // by default alert hide
  alertBox.textContent=msg;
  setTimeout(()=>{
    alertBox.style.display="none";
  },3000)
}
//Calling Start Game Function
startGame();
