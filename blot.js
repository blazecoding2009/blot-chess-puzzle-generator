const initialBoard = [
  "rnbqkbnr",
  "pppppppp",
  "        ",
  "        ",
  "        ",
  "        ",
  "PPPPPPPP",
  "RNBQKBNR",
];

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

for (let x = 0; x <= gridSize; x++) {
  finalLines.push([
    [x * squareSize, 0],
    [x * squareSize, height],
  ]);
}

for (let y = 0; y <= gridSize; y++) {
  finalLines.push([
    [0, y * squareSize],
    [width, y * squareSize],
  ]);
}

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

drawLines(finalLines);
