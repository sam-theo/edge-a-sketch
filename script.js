document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById('change');
    const buttonClear = document.getElementById('clear');
    const buttonColor = document.getElementById('color');
    const gridContainer = document.getElementById('container');
    let numRows = 16;
    let isMouseDown = false;
    let color = false;


    // Add click event listener to the "Change grid" button
    button.addEventListener("click", function () {
        let gridSize = prompt("Enter a number lower than 100 for the grid size:");
        gridSize = parseInt(gridSize);

        if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
            numRows = gridSize;
            clearGrid(gridContainer);
            createGrid(gridContainer, gridSize);
        } 
    });

    buttonClear.addEventListener("click", function(){
        clearGrid(gridContainer);
        createGrid(gridContainer, numRows);
    });

    buttonColor.addEventListener("click", function(){
        color = !color;
        if(color){
            buttonColor.textContent = "Black";
        }else{
            buttonColor.textContent = "Color";
        }
        clearGrid(gridContainer);
        createGrid(gridContainer, numRows);
    });

     // Inside the createGrid function
     function createGrid(container, size) {
        // Calculate cell width and height
        const cellWidth = `calc(100% / ${size})`;
        const cellHeight = `calc(100% / ${size})`;

        // Set the CSS variables
        container.style.setProperty("--size", size);
        
        // Create grid cells
        for (let row = 0; row < size; row++) {
            for (let column = 0; column < size; column++) {
                const cell = document.createElement('div');
                cell.classList.add('cell', 'custom-size'); // Add the 'custom-size' class
                let cellColor = "black";
                if(color){
                    cellColor = getRandomColor();
                }
                cell.addEventListener("mousedown", function () {
                    isMouseDown = true;
                    this.style.backgroundColor = cellColor;
                });
                cell.addEventListener("mouseup", function () {
                    isMouseDown = false;
                });
                cell.addEventListener("mouseenter", function () {
                    if (isMouseDown) {
                        this.style.backgroundColor = cellColor;
                    }
                });
                container.appendChild(cell);
            }
        }
    }

    function clearGrid(container) {
        // Clear existing cells from the grid container
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Initialize the grid with default size
    createGrid(gridContainer, numRows);
});

