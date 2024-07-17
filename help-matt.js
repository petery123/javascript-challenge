const mapInput = document.querySelector("#mapInput");
const resultBtn = document.querySelector("#resultBtn");
const matrixDisplay = document.querySelector("#matrixDisplay");
const shortestLenDisplay = document.querySelector("#shortestLenDisplay");

resultBtn.addEventListener('click', updateResult);

const MOVES = [
    [0, 1], //E
    [1, 1], //SE
    [1, 0], //S
    [1, -1], //SW
    [0, -1], //W
    [-1,-1], //NW
    [-1, 0], //N
    [-1, 1] //NE
]

let movesCounter = 0;
let shortestLen;
let shortestMap = [];

function validateInput(input){
    return Number.isInteger(Math.sqrt(input.split(",").length));
}

function getMatrix(input){
    let matrixMap = [];
    let arr = input.split(",");
    let rowLength = Math.sqrt(arr.length);
    let currentIndex = 0;
    for (i = 0; i < rowLength; i++){
        let holder = [];
        for (j = 0; j < rowLength; j++){
            holder.push(arr[currentIndex]);
            currentIndex++;
        }
        matrixMap.push(holder.slice());
    }
    return matrixMap;
}

function validateMove(currentPos, move, matrixMap){
    nextPos = [currentPos[0] + move[0], currentPos[1] + move[1]]
    maxIndex = matrixMap.length - 1;
    if ((nextPos[0] <= maxIndex) && (nextPos[0] >= 0) && (nextPos[1] <= maxIndex) && (nextPos[1] >= 0)){ //checking if within bounds
        let x = nextPos[0];
        let y = nextPos[1];
        if (matrixMap[x][y] === "d" || matrixMap[x][y] === "h"){
            return true;
        }
    }
    return false;
}

function nextMove(currentPos, matrixMap){
    let prevPos = currentPos.slice();
    for (let i = 0; i < 8; i++){
        currentPos = prevPos.slice();
        let move = MOVES[i].slice();
        if (movesCounter < shortestLen && validateMove(currentPos, move, matrixMap)){
            currentPos = [currentPos[0] + move[0], currentPos[1] + move[1]];
            if (matrixMap[currentPos[0]][currentPos[1]] === "d"){
                movesCounter++;
                matrixMap[currentPos[0]][currentPos[1]] = `m${movesCounter}`;
                nextMove(currentPos, matrixMap);
            }else{
                movesCounter++;
                updateShortest(movesCounter, matrixMap);
                movesCounter--;
                matrixMap[prevPos[0]][prevPos[1]] = "d";
                break;
            }
        }else if (i === 7){
            break;
        }
    }
    movesCounter--;
    matrixMap[prevPos[0]][prevPos[1]] = "d";
}

function updateShortest(movesCounter, map){
    if (movesCounter < shortestLen){
        shortestLen = movesCounter;
        shortestMap = map.map(subArray => [...subArray]);
    }
}

function solve(){
    let input = mapInput.value;
    if (validateInput(input)){
        let matrixMap = getMatrix(input);
        shortestLen = matrixMap.length * matrixMap.length;
        nextMove([0,0], matrixMap);
    }
}

function addMatrixTable(){
    const table = document.createElement("table");
    const length = shortestMap.length;

    for(i = 0; i < length; i++){
        let row = document.createElement("tr");

        for(j = 0; j < length; j++){
            let cell = document.createElement("td");
            cell.textContent = shortestMap[i][j];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
    matrixDisplay.appendChild(table);
}

function updateResult(){
    matrixDisplay.textContent = "";
    shortestLenDisplay.textContent = "";
    movesCounter = 0;
    solve();
    addMatrixTable();
    shortestLenDisplay.textContent = shortestLen;
}