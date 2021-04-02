window.addEventListener('DOMContentLoaded', () => {

  const board = document.getElementById('tic-tac-toe-board');
  let player = 'X';
  let boardState = ['', '', '', '', '', '', '', '', ''];

  board.addEventListener('click', event => {

    const square = document.getElementById(event.target.id); // ask a TA "why *wouldn't* we just suse this every time?"
    if (!square.style.backgroundImage) {
      const squareID = square.id.slice(7);
      // console.log(squareID)
      if (player === 'X') {
        square.classList.add('X')
        square.style.backgroundImage = "url(images/player-x.svg)";
        // boardState.splice(squareID, 1, "x")
        boardState[squareID] = "x"
        player = 'O';
      } else if (player === 'O') {
        square.classList.add('O')
        square.style.backgroundImage = "url(images/player-o.svg)";
        boardState[squareID] = "x"
        player = 'X';
      }
      console.log(boardState)

    }



  })

})
