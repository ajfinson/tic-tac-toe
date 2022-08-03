/*----- constants -----*/
var cell1 = document.querySelector("#1");
var cell2 = document.querySelector("#2");
var cell3 = document.querySelector("#3");
var cell4 = document.querySelector("#4");
var cell5 = document.querySelector("#5");
var cell6 = document.querySelector("#6");
var cell7 = document.querySelector("#7");
var cell8 = document.querySelector("#8");
var cell9 = document.querySelector("#9");
var wimMessage = document.querySelector("#wimMessage");
const startgame = document.querySelector("#startgame");
const board = document.querySelector("#board");
let turn = "X";
let flagEndGame = false
let counter = 0


/*----- functions -----*/
startgame.addEventListener("click", restart)
board.addEventListener("click", changethesquare);

function changethesquare(event) {
  let temp = event.target
  if (temp.innerHTML === '' && flagEndGame == false) {
    board.square = event.target;
    if (turn === "X") {
      board.square.innerHTML = "X";
      turn = "O";
    }
    else {
      board.square.innerHTML = "O";
      turn = "X";
    }
    counter += 1
  }
  else {
    window.alert('wrong selection!')
  }
  fillxyRowColumn()
}
function fillxyRowColumn() {
  let winner
  let array = [
    cell1.innerHTML, cell2.innerHTML, cell3.innerHTML,
    cell4.innerHTML, cell5.innerHTML, cell6.innerHTML,
    cell7.innerHTML, cell8.innerHTML, cell9.innerHTML
  ]
  /* logic of when its a victory   */
  if (array[0] == array[1] && array[1] == array[2] && array[0]!='') {
    flagEndGame = true
    wimMessage.innerHTML = 'Congratulations!! the winner is: ' + array[0] + '.'
  }
  else if (array[3] == array[4] && array[4] == array[5]&& array[3]!='') {
    flagEndGame = true
    wimMessage.innerHTML = 'Congratulations!! the winner is: ' + array[3] + '.'
  }
  else if (array[6] == array[7] && array[7] == array[8]&& array[6]!='') {
    flagEndGame = true
    wimMessage.innerHTML = 'Congratulations!! the winner is: ' + array[6] + '.'
  }
  else if (array[0] == array[3] && array[3] == array[6]&& array[0]!='') {
    flagEndGame = true
    wimMessage.innerHTML = 'Congratulations!! the winner is: ' + array[0] + '.'
  }
  else if (array[1] == array[4] && array[4] == array[7]&& array[1]!='') {
    flagEndGame = true
    wimMessage.innerHTML = 'Congratulations!! the winner is: ' + array[1] + '.'
  }
  else if (array[2] == array[5] && array[5] == array[8]&& array[2]!='') {
    flagEndGame = true
    wimMessage.innerHTML = 'Congratulations!! the winner is: ' + array[2] + '.'
  }
  else if (array[0] == array[4] && array[4] == array[8]&& array[0]!='') {
    flagEndGame = true
    wimMessage.innerHTML = 'Congratulations!! the winner is: ' + array[0] + '.'
  }
  else if (array[2] == array[4] && array[4] == array[6]&& array[2]!='') {
    flagEndGame = true
    wimMessage.innerHTML = 'Congratulations!! the winner is: ' + array[2] + '.'
  }
  /* checks to see its not 3 nulls because then the nulls will win when the page loads...*/
  else if (counter == 9) {
    flagEndGame = true
    wimMessage.innerHTML = 'Its a tie!!'
  }

}
function restart() {
  window.location.reload();
}


