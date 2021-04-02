window.addEventListener('DOMContentLoaded', () => {

  const board = document.getElementById('tic-tac-toe-board');
  let player = 'X';

  board.addEventListener('click', event => {

    const square = document.getElementById(event.target.id);
    if (!square.style.backgroundImage) {
      if (player === 'X') {

        square.style.backgroundImage = "url(images/player-x.svg)";
        player = 'O';
      } else if (player === 'O') {

        square.style.backgroundImage = "url(images/player-o.svg)";
        player = 'X';
      }

    }



  })

})
