const gridContainer = document.getElementById('container');
const numRows = 16;
const numColumn = 16;

for(let row = 0; row < numRows; row++){
    for(let column = 0; column < numColumn; column++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        gridContainer.appendChild(cell);
    }
}