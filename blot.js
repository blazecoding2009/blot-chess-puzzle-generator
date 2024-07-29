const initialBoard = [
    "rnbqkbnr", "pppppppp", "        ", "        ",
    "        ", "        ", "PPPPPPPP", "RNBQKBNR",
  ];
const width = 200, height = 200, gridSize = 8, squareSize = width / gridSize;
const finalLines = [], pieces = {
    K: drawPiece, Q: drawPiece, R: drawPiece, B: drawPiece,
    N: drawPiece, P: drawPiece, k: drawPieceFilled,
    q: drawPieceFilled, r: drawPieceFilled,
    b: drawPieceFilled, n: drawPieceFilled, p: drawPieceFilled
};
  
setDocDimensions(width, height);
  
for (let x = 0; x <= gridSize; x++) finalLines.push([[x * squareSize, 0], [x * squareSize, height]]);
for (let y = 0; y <= gridSize; y++) finalLines.push([[0, y * squareSize], [width, y * squareSize]]);
  
for (let row = 0; row < 8; row++) {
   for (let col = 0; col < 8; col++) {
        const piece = initialBoard[row][col];
        if (piece !== " " && pieces[piece]) pieces[piece](col * squareSize, row * squareSize, squareSize, piece.toUpperCase());
    }
}
  
function drawPiece(x, y, size, type) {
    const templates = {
        K: [[0.5, 0.1], [0.4, 0.3], [0.6, 0.3], [0.5, 0.1], [0.3, 0.4], [0.7, 0.4], [0.3, 0.7], [0.7, 0.7], [0.3, 0.9], [0.7, 0.9]],
        Q: [[0.5, 0.1], [0.4, 0.3], [0.6, 0.3], [0.5, 0.1], [0.3, 0.4], [0.7, 0.4], [0.5, 0.5], [0.3, 0.9], [0.7, 0.9]],
        R: [[0.3, 0.1], [0.7, 0.1], [0.7, 0.3], [0.3, 0.3], [0.3, 0.7], [0.7, 0.7], [0.7, 0.9], [0.3, 0.9], [0.3, 0.1]],
        B: [[0.5, 0.1], [0.4, 0.2], [0.6, 0.2], [0.5, 0.1], [0.3, 0.3], [0.7, 0.3], [0.5, 0.5], [0.3, 0.9], [0.7, 0.9]],
        N: [[0.5, 0.1], [0.4, 0.2], [0.6, 0.2], [0.5, 0.1], [0.4, 0.4], [0.6, 0.4], [0.4, 0.6], [0.6, 0.6], [0.3, 0.9], [0.7, 0.9]],
        P: [[0.5, 0.1], [0.4, 0.2], [0.6, 0.2], [0.5, 0.1], [0.3, 0.3], [0.7, 0.3], [0.3, 0.9], [0.7, 0.9]],
    };
    finalLines.push(templates[type].map(([dx, dy]) => [x + dx * size, y + dy * size]));
}
  
function drawPieceFilled(x, y, size, type) {
    for (let i = 0; i < 10; i++) {
        drawPiece(x, y + i * 0.01 * size, size, type);
    }
}
  
drawLines(finalLines);
  