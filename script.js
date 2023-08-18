document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".button");
    const gridContainer = document.getElementById('container');
    const numRows = 16;
    const numColumns = 16;
    let isMouseDown = false;

    // Add click event listener to the "Change grid" button
    button.addEventListener("click", function () {
        let gridSize = prompt("Enter a number lower than 100 for the grid size:");
        gridSize = parseInt(gridSize);

        if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
            clearGrid(gridContainer);
            createGrid(gridContainer, gridSize);
        } else {
            alert("Please enter a valid number lower than 100.");
        }
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
                cell.addEventListener("mousedown", function () {
                    isMouseDown = true;
                    this.style.backgroundColor = "black";
                });
                cell.addEventListener("mouseup", function () {
                    isMouseDown = false;
                });
                cell.addEventListener("mouseenter", function () {
                    if (isMouseDown) {
                        this.style.backgroundColor = "black";
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

    // Initialize the grid with default size
    createGrid(gridContainer, numRows);
});
