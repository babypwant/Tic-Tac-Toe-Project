window.addEventListener("DOMContentLoaded", () => {
  const board = document.getElementById("tic-tac-toe-board");
  const gameStatus = document.getElementById("game-status");
  let player = "X";
  let boardState = ["", "", "", "", "", "", "", "", ""];
  let count = 0;

  board.addEventListener("click", (event) => {
    const square = document.getElementById(event.target.id); // ask a TA "why *wouldn't* we just suse this every time?"
    if (!square.style.backgroundImage) {
      const squareID = square.id.slice(7);
      //const squareID = square.id[square.id.length - 1]

      console.log(squareID);
      if (player === "X") {
        square.classList.add("X");
        square.style.backgroundImage = "url(images/player-x.svg)";
        // boardState.splice(squareID, 1, "x")
        boardState[squareID] = "X";
        player = "O";
      } else if (player === "O") {
        square.classList.add("O");
        square.style.backgroundImage = "url(images/player-o.svg)";
        boardState[squareID] = "O";
        player = "X";
      }
      console.log(boardState);
      winner(boardState);
    }
  });

  const winner = (boardArray) => {
    if (count === 8) {
      gameStatus.innerText = `Tie Game! Y'all suck!`;
    }
    //rows
    if (
      boardArray[0] === boardArray[1] &&
      boardArray[0] === boardArray[2] &&
      boardArray[0] !== ""
    ) {
      gameStatus.innerText = `Winner : ${boardArray[0]}`;
      return;
    }
    if (
      boardArray[3] === boardArray[4] &&
      boardArray[3] === boardArray[5] &&
      boardArray[3] !== ""
    ) {
      gameStatus.innerText = `Winner : ${boardArray[3]}`;
      return;
    }
    if (
      boardArray[6] === boardArray[7] &&
      boardArray[6] === boardArray[8] &&
      boardArray[6] !== ""
    ) {
      gameStatus.innerText = `Winner : ${boardArray[6]}`;
      return;
    }

    //column
    if (
      boardArray[0] === boardArray[3] &&
      boardArray[0] === boardArray[6] &&
      boardArray[0] !== ""
    ) {
      gameStatus.innerText = `Winner : ${boardArray[0]}`;
      return;
    }
    if (
      boardArray[1] === boardArray[4] &&
      boardArray[1] === boardArray[7] &&
      boardArray[1] !== ""
    ) {
      gameStatus.innerText = `Winner : ${boardArray[1]}`;
      return;
    }
    if (
      boardArray[2] === boardArray[5] &&
      boardArray[2] === boardArray[8] &&
      boardArray[2] !== ""
    ) {
      gameStatus.innerText = `Winner : ${boardArray[2]}`;
      return;
    }

    //diag
    if (
      boardArray[0] === boardArray[4] &&
      boardArray[0] === boardArray[8] &&
      boardArray[0] !== ""
    ) {
      gameStatus.innerText = `Winner : ${boardArray[0]}`;
      return;
    }
    if (
      boardArray[2] === boardArray[4] &&
      boardArray[2] === boardArray[6] &&
      boardArray[2] !== ""
    ) {
      gameStatus.innerText = `Winner : ${boardArray[2]}`;
      return;
    }
    count++;
    // [ 0, 1, 2
    //   3, 4, 5,
    //   6 ,7, 8
    // ]
  };
});
