window.addEventListener('DOMContentLoaded', () => {

  const board = document.getElementById('tic-tac-toe-board');
  const gameStatus = document.getElementById('game-status');
  let player = 'X';
  let boardState = ['', '', '', '', '', '', '', '', ''];

  board.addEventListener('click', event => {

    const square = document.getElementById(event.target.id); // ask a TA "why *wouldn't* we just suse this every time?"
    if (!square.style.backgroundImage) {
      const squareID = square.id.slice(7);
      //const squareID = square.id[square.id.length - 1]

      console.log(squareID)
      if (player === 'X') {
        square.classList.add('X')
        square.style.backgroundImage = "url(images/player-x.svg)";
        // boardState.splice(squareID, 1, "x")
        boardState[squareID] = "X"
        player = 'O';
      } else if (player === 'O') {
        square.classList.add('O')
        square.style.backgroundImage = "url(images/player-o.svg)";
        boardState[squareID] = "O"
        player = 'X';
      }
      console.log(boardState)
      winner(boardState)
    }



  })

  const winner = (boardArray) => {

    //rows
    if (boardArray[0] === boardArray[1] && boardArray[0] === boardArray[2] && boardArray[0] !== '') {

      gameStatus.innerText = `Winner : ${boardArray[0]}`

    }
    if (boardArray[3] === boardArray[4] && boardArray[3] === boardArray[5] && boardArray[3] !== '') {

      gameStatus.innerText = `Winner : ${boardArray[3]}`

    }
    if (boardArray[6] === boardArray[7] && boardArray[6] === boardArray[8] && boardArray[6] !== '') {

      gameStatus.innerText = `Winner : ${boardArray[6]}`

    }


    //column

    //diag

  }

})
