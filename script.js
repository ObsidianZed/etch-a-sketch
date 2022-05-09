const container = document.querySelector('#container');
let gridSize = 10;
let gridMapSize = 400;
let gridSquareSize = (gridMapSize/gridSize) + "px";


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
        // drawRows();
        for (k=0; k<gridSize; k++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('gridSquare');
            // gridSquare.innerHTML += "X";
            gridRow.appendChild(gridSquare);
        }
    }
    const gridSquares = document.getElementsByClassName('gridSquare');
    for (let j=0; j<gridSquares.length; j++) {
        gridSquares[j].setAttribute("style",`height:${gridSquareSize};width:${gridSquareSize};`);
        gridSquares[j].addEventListener('mouseover', function () {this.style.backgroundColor = "red";});
        gridSquares[j].addEventListener('mouseout', function () {this.style.backgroundColor = "none";});
    }
}

function drawRows() {
    const newDiv = document.createElement('div');
    newDiv.classList.add('gridSquare');
    // newDiv.innerHTML = "X";
    gridRow.appendChild(newDiv);
}

drawGrid();