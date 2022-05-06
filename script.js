const container = document.querySelector('#container');
let gridSize = 5;
let gridSquareSize = 10;


const gridMap = document.createElement('div');
gridMap.setAttribute('id','gridMap');
container.appendChild(gridMap);

// build grid by adding gridSize # of divs in a row and create gridSize # of rows

// build one row of gridSize # of divs

function drawGrid() {
    for (i=0; i<gridSize; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');
        gridMap.appendChild(gridRow);
        console.log(`Row ${i}`);
        // drawRows();
        for (i=0; i<gridSize; i++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('gridSquare');
            gridSquare.innerHTML += "X";
            gridRow.appendChild(gridSquare);
            console.log(`Square ${i}`);
            console.log(`Square Complete.`);
        }
        console.log(`Row Complete.`);
    }
    console.log(`Grid Complete.`);
}

function drawRows() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('gridSquare');
    newDiv.innerHTML = "X";
    gridRow.appendChild(newDiv);
}

drawGrid();