import fetch from 'node-fetch';
async function getDailyPuzzle() {
  const response = await fetch('https://api.chess.com/pub/puzzle');
  const data = await response.json();
  return data;
}

function fenToBoardArray(fen) {
    const rows = fen.split(' ')[0].split('/');
    const board = [];
  
    for (let row of rows) {
      let boardRow = '';
      for (let char of row) {
        if (isNaN(char)) {
          boardRow += char;
        } else {
          for (let i = 0; i < parseInt(char); i++) {
            boardRow += ' ';
          }
        }
      }
      board.push(boardRow);
    }
  
    return board;
}

getDailyPuzzle().then(daily => {
    let boardArray1 = fenToBoardArray(daily.fen);
    let boardArray = [];
    boardArray1.forEach(b => {
        boardArray.push(`"${b}"`)
    })
    console.log(`// Initial position of pieces on a chessboard
const initialBoard = [${boardArray}];

const width = 200;
const height = 200;
const gridSize = 8;
const squareSize = width / gridSize;
const pieces = {
  K: drawKing,
  Q: drawQueen,
  R: drawRook,
  B: drawBishop,
  N: drawKnight,
  P: drawPawn,
  k: drawKingFilled,
  q: drawQueenFilled,
  r: drawRookFilled,
  b: drawBishopFilled,
  n: drawKnightFilled,
  p: drawPawnFilled,
};
const finalLines = [];


setDocDimensions(width, height);

// Draw the grid
for (let x = 0; x <= gridSize; x++) {
  // vertical lines
  finalLines.push([
    [x * squareSize, 0],
    [x * squareSize, height],
  ]);
}

for (let y = 0; y <= gridSize; y++) {
  // horizontal lines
  finalLines.push([
    [0, y * squareSize],
    [width, y * squareSize],
  ]);
}

// Draw pieces on the board
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const x = col * squareSize;
    const y = row * squareSize;
    const piece = initialBoard[row][col];
    if (piece !== " " && pieces[piece]) {
      pieces[piece](x, y, squareSize);
    }
  }
}

// Draw King
function drawKing(x, y, size) {
  const polyline = [
    [x + size * 0.5, y + size * 0.1],
    [x + size * 0.4, y + size * 0.3],
    [x + size * 0.6, y + size * 0.3],
    [x + size * 0.5, y + size * 0.1],
    [x + size * 0.3, y + size * 0.4],
    [x + size * 0.7, y + size * 0.4],
    [x + size * 0.3, y + size * 0.7],
    [x + size * 0.7, y + size * 0.7],
    [x + size * 0.3, y + size * 0.9],
    [x + size * 0.7, y + size * 0.9],
  ];
  finalLines.push(polyline);
}

function drawKingFilled(x, y, size) {
  for (let i = 0; i < 10; i++) {
    const polyline = [
      [x + size * 0.5, y + size * 0.1 + i * 0.01 * size],
      [x + size * 0.4, y + size * 0.3 + i * 0.01 * size],
      [x + size * 0.6, y + size * 0.3 + i * 0.01 * size],
      [x + size * 0.5, y + size * 0.1 + i * 0.01 * size],
      [x + size * 0.3, y + size * 0.4 + i * 0.01 * size],
      [x + size * 0.7, y + size * 0.4 + i * 0.01 * size],
      [x + size * 0.3, y + size * 0.7 + i * 0.01 * size],
      [x + size * 0.7, y + size * 0.7 + i * 0.01 * size],
      [x + size * 0.3, y + size * 0.9 + i * 0.01 * size],
      [x + size * 0.7, y + size * 0.9 + i * 0.01 * size],
    ];
    finalLines.push(polyline);
  }
}

// Draw Queen
function drawQueen(x, y, size) {
  const polyline = [
    [x + size * 0.5, y + size * 0.1],
    [x + size * 0.4, y + size * 0.3],
    [x + size * 0.6, y + size * 0.3],
    [x + size * 0.5, y + size * 0.1],
    [x + size * 0.3, y + size * 0.4],
    [x + size * 0.7, y + size * 0.4],
    [x + size * 0.5, y + size * 0.5],
    [x + size * 0.3, y + size * 0.9],
    [x + size * 0.7, y + size * 0.9],
  ];
  finalLines.push(polyline);
}

function drawQueenFilled(x, y, size) {
  for (let i = 0; i < 10; i++) {
    const polyline = [
      [x + size * 0.5, y + size * 0.1 + i * 0.01 * size],
      [x + size * 0.4, y + size * 0.3 + i * 0.01 * size],
      [x + size * 0.6, y + size * 0.3 + i * 0.01 * size],
      [x + size * 0.5, y + size * 0.1 + i * 0.01 * size],
      [x + size * 0.3, y + size * 0.4 + i * 0.01 * size],
      [x + size * 0.7, y + size * 0.4 + i * 0.01 * size],
      [x + size * 0.5, y + size * 0.5 + i * 0.01 * size],
      [x + size * 0.3, y + size * 0.9 + i * 0.01 * size],
      [x + size * 0.7, y + size * 0.9 + i * 0.01 * size],
    ];
    finalLines.push(polyline);
  }
}

// Draw Rook
function drawRook(x, y, size) {
  const polyline = [
    [x + size * 0.3, y + size * 0.1],
    [x + size * 0.7, y + size * 0.1],
    [x + size * 0.7, y + size * 0.3],
    [x + size * 0.3, y + size * 0.3],
    [x + size * 0.3, y + size * 0.7],
    [x + size * 0.7, y + size * 0.7],
    [x + size * 0.7, y + size * 0.9],
    [x + size * 0.3, y + size * 0.9],
    [x + size * 0.3, y + size * 0.1],
  ];
  finalLines.push(polyline);
}

function drawRookFilled(x, y, size) {
  for (let i = 0; i < 10; i++) {
    const polyline = [
      [x + size * 0.3, y + size * 0.1 + i * 0.01 * size],
      [x + size * 0.7, y + size * 0.1 + i * 0.01 * size],
      [x + size * 0.7, y + size * 0.3 + i * 0.01 * size],
      [x + size * 0.3, y + size * 0.3 + i * 0.01 * size],
      [x + size * 0.3, y + size * 0.7 + i * 0.01 * size],
      [x + size * 0.7, y + size * 0.7 + i * 0.01 * size],
      [x + size * 0.7, y + size * 0.9 + i * 0.01 * size],
      [x + size * 0.3, y + size * 0.9 + i * 0.01 * size],
      [x + size * 0.3, y + size * 0.1 + i * 0.01 * size],
    ];
    finalLines.push(polyline);
  }
}

// Draw Bishop
function drawBishop(x, y, size) {
  const polyline = [
    [x + size * 0.5, y + size * 0.1],
    [x + size * 0.4, y + size * 0.2],
    [x + size * 0.6, y + size * 0.2],
    [x + size * 0.5, y + size * 0.1],
    [x + size * 0.3, y + size * 0.3],
    [x + size * 0.7, y + size * 0.3],
    [x + size * 0.5, y + size * 0.5],
    [x + size * 0.3, y + size * 0.9],
    [x + size * 0.7, y + size * 0.9],
  ];
  finalLines.push(polyline);
}

function drawBishopFilled(x, y, size) {
  for (let i = 0; i < 10; i++) {
    const polyline = [
      [x + size * 0.5, y + size * 0.1 + i * 0.01 * size],
      [x + size * 0.4, y + size * 0.2 + i * 0.01 * size],
      [x + size * 0.6, y + size * 0.2 + i * 0.01 * size],
      [x + size * 0.5, y + size * 0.1 + i * 0.01 * size],
      [x + size * 0.3, y + size * 0.3 + i * 0.01 * size],
      [x + size * 0.7, y + size * 0.3 + i * 0.01 * size],
      [x + size * 0.5, y + size * 0.5 + i * 0.01 * size],
      [x + size * 0.3, y + size * 0.9 + i * 0.01 * size],
      [x + size * 0.7, y + size * 0.9 + i * 0.01 * size],
    ];
    finalLines.push(polyline);
  }
}

// Draw Knight
function drawKnight(x, y, size) {
  const polyline = [
    [x + size * 0.5, y + size * 0.1],
    [x + size * 0.4, y + size * 0.2],
    [x + size * 0.6, y + size * 0.2],
    [x + size * 0.5, y + size * 0.1],
    [x + size * 0.4, y + size * 0.4],
    [x + size * 0.6, y + size * 0.4],
    [x + size * 0.4, y + size * 0.6],
    [x + size * 0.6, y + size * 0.6],
    [x + size * 0.3, y + size * 0.9],
    [x + size * 0.7, y + size * 0.9],
  ];
  finalLines.push(polyline);
}

function drawKnightFilled(x, y, size) {
  for (let i = 0; i < 10; i++) {
    const polyline = [
      [x + size * 0.5, y + size * 0.1 + i * 0.01 * size],
      [x + size * 0.4, y + size * 0.2 + i * 0.01 * size],
      [x + size * 0.6, y + size * 0.2 + i * 0.01 * size],
      [x + size * 0.5, y + size * 0.1 + i * 0.01 * size],
      [x + size * 0.4, y + size * 0.4 + i * 0.01 * size],
      [x + size * 0.6, y + size * 0.4 + i * 0.01 * size],
      [x + size * 0.4, y + size * 0.6 + i * 0.01 * size],
      [x + size * 0.6, y + size * 0.6 + i * 0.01 * size],
      [x + size * 0.3, y + size * 0.9 + i * 0.01 * size],
      [x + size * 0.7, y + size * 0.9 + i * 0.01 * size],
    ];
    finalLines.push(polyline);
  }
}

// Draw Pawn
function drawPawn(x, y, size) {
  const polyline = [
    [x + size * 0.5, y + size * 0.1],
    [x + size * 0.4, y + size * 0.2],
    [x + size * 0.6, y + size * 0.2],
    [x + size * 0.5, y + size * 0.1],
    [x + size * 0.3, y + size * 0.3],
    [x + size * 0.7, y + size * 0.3],
    [x + size * 0.3, y + size * 0.9],
    [x + size * 0.7, y + size * 0.9],
  ];
  finalLines.push(polyline);
}

function drawPawnFilled(x, y, size) {
  for (let i = 0; i < 10; i++) {
    const polyline = [
      [x + size * 0.5, y + size * 0.1 + i * 0.01 * size],
      [x + size * 0.4, y + size * 0.2 + i * 0.01 * size],
      [x + size * 0.6, y + size * 0.2 + i * 0.01 * size],
      [x + size * 0.5, y + size * 0.1 + i * 0.01 * size],
      [x + size * 0.3, y + size * 0.3 + i * 0.01 * size],
      [x + size * 0.7, y + size * 0.3 + i * 0.01 * size],
      [x + size * 0.3, y + size * 0.9 + i * 0.01 * size],
      [x + size * 0.7, y + size * 0.9 + i * 0.01 * size],
    ];
    finalLines.push(polyline);
  }
}

// Draw all final lines
drawLines(finalLines);
`)
});