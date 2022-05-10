const container = document.querySelector('#container');
let gridSize = 16;
let gridMapSize = 400;
let fillColor = `hsl(120,100%,100%)`;
let randColor = 120;
let blackValue = 100;

const gridMap = document.createElement('div');
gridMap.setAttribute('id','gridMap');
gridMap.setAttribute('style','height:400px;width:400px;')
container.appendChild(gridMap);

function initializeGrid(){
    while(gridMap.hasChildNodes()) {
        gridMap.removeChild(gridMap.firstChild);
    }
    randColor = 120;
    blackValue = 100;
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
        gridSquares[j].addEventListener('mouseenter', function () {
            
            let fillColor = `hsl(120,100%,100%)`;

            randColor = Math.floor(Math.random() * (360 - 1) + 1);
            fillColor = `hsl(${randColor},100%,${blackValue}%)`;

            if(blackValue>0) {
                blackValue -= 2;
            }
            console.log(blackValue);
            
            // for (let b=0; b>0; (b-10)) {}


            this.style.backgroundColor = fillColor;
        });
        gridSquares[j].addEventListener('mouseout', function () {this.style.backgroundColor = "none";});
    }
}

function userGrid() {
    gridSize = prompt('How many squares should the rows and columns consist of?');
    gridSize = +gridSize;
    if (gridSize < 1 || gridSize > 100 || typeof(gridSize) != 'number') {
        // gridSize = prompt('Please enter a valid number value of 2 to 100.');
        console.log(gridSize);
        console.log(typeof(gridSize));
        alert(`Invalid Input: ${gridSize} Please enter a valid number value of 2 to 100.`);
        userGrid();
    } else if(gridSize == null) {
        gridSize = prompt('?????');
    }
    
    if(gridSize>1 || gridSize <100) {
        initializeGrid();
        drawGrid();
    }
}

drawGrid();