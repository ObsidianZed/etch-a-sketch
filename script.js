const container = document.querySelector('#container');
let gridSize = 16;
let gridMapSize = 400;

const gridMap = document.createElement('div');
gridMap.setAttribute('id','gridMap');
gridMap.setAttribute('style','height:400px;width:400px;')
container.appendChild(gridMap);

function initializeGrid(){
    while(gridMap.hasChildNodes()) {
        gridMap.removeChild(gridMap.firstChild);
    }
}

function drawGrid() {
    let gridSquareSize = (gridMapSize/gridSize) + "px";
    for (i=0; i<gridSize; i++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('gridRow');
        gridMap.appendChild(gridRow);
        for (k=0; k<gridSize; k++) {
            const gridSquare = document.createElement('div');
            gridSquare.classList.add('gridSquare');
            gridRow.appendChild(gridSquare);
        }
    }
    const gridSquares = document.getElementsByClassName('gridSquare');
    for (let j=0; j<gridSquares.length; j++) {
        gridSquares[j].setAttribute("style",`height:${gridSquareSize};width:${gridSquareSize};border:1px solid black`);
        gridSquares[j].addEventListener('mouseover', function () {this.style.backgroundColor = "red";});
        gridSquares[j].addEventListener('mouseout', function () {this.style.backgroundColor = "none";});
    }
}

function userGrid() {
    gridSize = prompt('How many squares should the grid consist of?');
    initializeGrid();
    drawGrid();
}

drawGrid();