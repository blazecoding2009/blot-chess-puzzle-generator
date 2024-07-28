// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 200;
const height = 200;

setDocDimensions(width, height);

// store final lines here
const finalLines = [];

// Size of each square
const squareSize = width / 8;

// Map of pieces to drawing functions
const pieces = {
  'K': drawKing,
  'Q': drawQueen,
  'R': drawRook,
  'B': drawBishop,
  'N': drawKnight,
  'P': drawPawn,
  'k': drawKing,
  'q': drawQueen,
  'r': drawRook,
  'b': drawBishop,
  'n': drawKnight,
  'p': drawPawn,
};

// Draw pieces on the board
for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const x = col * squareSize;
    const y = row * squareSize;
    const piece = getPieceAt(row, col);
    if (piece && pieces[piece]) {
      pieces[piece](x, y, squareSize);
    }
  }
}

// Function to get piece at specific position 
function getPieceAt(row, col) {
  const pieceOrder = 'RNBQKBNRPPPPPPPPpppppppprnbqkbnr';
  const index = row * 8 + col;
  return pieceOrder[index] || ' ';
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
    [x + size * 0.7, y + size * 0.9]
  ];
  finalLines.push(polyline);
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
    [x + size * 0.3, y + size * 0.1]
  ];
  finalLines.push(polyline);
}

// Draw Bishop
function drawBishop(x, y, size) {
  const polyline = [
    [x + size * 0.5, y + size * 0.1],
    [x + size * 0.4, y + size * 0.2],
    [x + size * 0.6, y + size * 0.2],
    [x + size * 0.5, y + size * 0.1],
    [x + size * 0.4, y + size * 0.3],
    [x + size * 0.6, y + size * 0.3],
    [x + size * 0.5, y + size * 0.4],
    [x + size * 0.4, y + size * 0.5],
    [x + size * 0.6, y + size * 0.5],
    [x + size * 0.5, y + size * 0.6],
    [x + size * 0.4, y + size * 0.9],
    [x + size * 0.6, y + size * 0.9]
  ];
  finalLines.push(polyline);
}

// Draw Knight
function drawKnight(x, y, size) {
  const polyline = [
    [x + size * 0.5, y + size * 0.2],
    [x + size * 0.3, y + size * 0.3],
    [x + size * 0.7, y + size * 0.3],
    [x + size * 0.5, y + size * 0.2],
    [x + size * 0.3, y + size * 0.5],
    [x + size * 0.7, y + size * 0.5],
    [x + size * 0.5, y + size * 0.7],
    [x + size * 0.3, y + size * 0.9],
    [x + size * 0.7, y + size * 0.9]
  ];
  finalLines.push(polyline);
}

// Draw Pawn
function drawPawn(x, y, size) {
  const polyline = [
    [x + size * 0.5, y + size * 0.3],
    [x + size * 0.4, y + size * 0.4],
    [x + size * 0.6, y + size * 0.4],
    [x + size * 0.5, y + size * 0.3],
    [x + size * 0.5, y + size * 0.5],
    [x + size * 0.4, y + size * 0.7],
    [x + size * 0.6, y + size * 0.7],
    [x + size * 0.5, y + size * 0.9]
  ];
  finalLines.push(polyline);
}

// Draw the pieces
drawLines(finalLines);
