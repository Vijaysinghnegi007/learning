const board = document.querySelector(".board");
const blockSize = 30;

const columns = Math.floor(board.clientWidth / blockSize);
const rows = Math.floor(board.clientHeight / blockSize);

let snake = []

board.style.gridTemplateColumns = `repeat(${columns}, minmax(${blockSize}px, 1fr))`;
board.style.gridTemplateRows = `repeat(${rows}, minmax(${blockSize}px, 1fr))`;
 
for (let i = 0; i < rows * columns; i++) {
  const block = document.createElement("div");
  block.classList.add("block");
  board.appendChild(block);
}


for (let i = 0; i = )