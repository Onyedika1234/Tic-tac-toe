var board;
var playerO = "O";
var playerX = "X";
var currentPlayer = playerO;
var gameOver = false;
window.onload = function () {
  //   console.log("window loaded");
  setGame();
};
function setGame() {
  board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      if (r == 0 || r == 1) {
        tile.classList.add("horizontal-line");
      }
      if (c == 0 || c == 1) {
        tile.classList.add("vertical-line");
      }
      tile.addEventListener("click", setTile);
      document.getElementById("board").append(tile);
    }
  }
}
function setTile() {
  if (gameOver) {
    return;
  }
  let coords = this.id.split("-");
  // console.log(coords);
  let r = parseInt(coords[0]);
  let c = parseInt(coords[1]);
  if (board[r][c] != " ") {
    return;
  }
  // console.log("row number is " + r + " colomn number is " + c);
  board[r][c] = currentPlayer;
  this.innerText = currentPlayer;
  if (currentPlayer == playerO) {
    currentPlayer = playerX;
  } else {
    currentPlayer = playerO;
  }
  checkWinner();
}
function checkWinner() {
  for (r = 0; r < 3; r++) {
    if (
      board[r][0] == board[r][1] &&
      board[r][1] == board[r][2] &&
      board[r][0] != " "
    ) {
      // console.log("Matching role");
      for (i = 0; i < 3; i++) {
        let id = r.toString() + "-" + i.toString();
        // console.log(id)
        // console.log(typeof id)
        let tile = document.getElementById(id);
        // console.log(tile);
        tile.classList.add("winner");
        // // }
      }
      if (currentPlayer != playerO) {
        let gameOverStatement = document.getElementById("gameover");
        gameOverStatement.innerHTML = "GAME OVER PLAYER-O WINS";
      } else {
        let gameOverStatement = document.getElementById("gameover");
        gameOverStatement.innerHTML = "GAME OVER PLAYER-X WINS";
      }
      gameOver = true;
      return;
    }
  }
  for (c = 0; c < 3; c++) {
    if (
      board[0][c] == board[1][c] &&
      board[1][c] == board[2][c] &&
      board[0][c] != " "
    ) {
      for (i = 0; i < 3; i++) {
        let id = i.toString() + "-" + c.toString();
        // console.log(id)
        // console.log(typeof id)
        let tile = document.getElementById(id);
        // console.log(tile);
        tile.classList.add("winner");
        // // }
      }
      if (currentPlayer != playerO) {
        let gameOverStatement = document.getElementById("gameover");
        gameOverStatement.innerHTML = "GAME OVER PLAYER-O WINS";
      } else {
        let gameOverStatement = document.getElementById("gameover");
        gameOverStatement.innerHTML = "GAME OVER PLAYER-X WINS";
      }
      gameOver = true;
      return;
    }
  }
  if (
    board[0][0] == board[1][1] &&
    board[1][1] == board[2][2] &&
    board[0][0] != " "
  ) {
    for (let i = 0; i < 3; i++) {
      let id = i.toString() + "-" + i.toString();
      let tile = document.getElementById(id);
      // console.log(tile)
      tile.classList.add("winner");
    }
    if (currentPlayer != playerO) {
      let gameOverStatement = document.getElementById("gameover");
      gameOverStatement.innerHTML = "GAME OVER PLAYER-O WINS";
    } else {
      let gameOverStatement = document.getElementById("gameover");
      gameOverStatement.innerHTML = "GAME OVER PLAYER-X WINS";
    }
    gameOver = true;
    return;
  }
  if (
    board[0][0] == board[1][1] &&
    board[1][1] == board[2][2] &&
    board[0][0] != " "
  ) {
    for (let i = 0; i < 3; i++) {
      let id = i.toString() + "-" + i.toString();
      let tile = document.getElementById(id);
      // console.log(tile)
      tile.classList.add("winner");
    }
    if (currentPlayer != playerO) {
      let gameOverStatement = document.getElementById("gameover");
      gameOverStatement.innerHTML = "GAME OVER PLAYER-O WINS";
    } else {
      let gameOverStatement = document.getElementById("gameover");
      gameOverStatement.innerHTML = "GAME OVER PLAYER-X WINS";
    }
    gameOver = true;
    return;
  }
  if (
    board[0][2] == board[1][1] &&
    board[1][1] == board[2][0] &&
    board[0][2] != " "
  ) {
    // console.log(tile);
    let tile = document.getElementById("0-2");
    tile.classList.add("winner");
    tile = document.getElementById("1-1");
    tile.classList.add("winner");
    tile = document.getElementById("2-0");
    tile.classList.add("winner");
    if (currentPlayer != playerO) {
      let gameOverStatement = document.getElementById("gameover");
      gameOverStatement.innerHTML = "GAME OVER PLAYER-O WINS";
    } else {
      let gameOverStatement = document.getElementById("gameover");
      gameOverStatement.innerHTML = "GAME OVER PLAYER-X WINS";
      // let startAgain = document.getElementById("startAgain");
      // startAgain.addEventListener("click", reStart);
    }
    gameOver = true;
    return;
  }
}
