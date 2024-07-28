import fetch from 'node-fetch';
// Fetch daily puzzle from Chess.com
async function getDailyPuzzle() {
  const response = await fetch('https://api.chess.com/pub/puzzle');
  const data = await response.json();
  return data;
}

function fenToBoardArray(fen) {
    const rows = fen.split(' ')[0].split('/');
    const board = [];
  
    for (let row of rows) {
      const boardRow = [];
      for (let char of row) {
        if (isNaN(char)) {
          boardRow.push(char);
        } else {
          for (let i = 0; i < parseInt(char); i++) {
            boardRow.push(' ');
          }
        }
      }
      board.push(boardRow);
    }
  
    return board;
}

// Main function to execute the process
getDailyPuzzle().then(daily => {
    console.log(fenToBoardArray(daily.fen))
})