window.addEventListener('DOMContentLoaded', () => {

  const board = document.getElementById('tic-tac-toe-board');

  board.addEventListener('click', event => {
    console.log(1)
    const square = document.getElementById(event.target.id);
    // square.style.backgroundColor = 'black';
    square.style.backgroundImage = "src=player-x.svg";
  })

})
