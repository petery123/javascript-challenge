const mapInput = document.querySelector("#mapInput");
const resultBtn = document.querySelector("#resultBtn");

resultBtn.addEventListener('click', updateResult);

const MOVES = [
    [1, 0], //E
    [1, 1] //SE
    [0, 1], //S
    [-1, 1], //SW
    [-1, 0], //W
    [-1,-1], //NW
    [0, -1], //N
    [1, -1], //NE
    
]

let shortestLen = 0;

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

function nextMove(currentPos, matrixMap, movesLen){
    let prevPos = currentPos;
    for (i = 0; i < 8; i++){
        let move = MOVES[i];
        if (validateMove(currentPos, move, matrixMap)){
            currentPos = [currentPos[0] + move[0], currentPos[1] + move[1]];
            movesLen++;
            if (matrixMap[currentPos[0]][currentPos[1]] === "d"){
                matrixMap[currentPos[0]][currentPos[1]] = "m";
                nextMove(currentPos, matrixMap, movesLen);
            }else{
                updateShortest(movesLen);
                currentPos = prevPos;
                movesLen--;
            }
        }else if (i === 7){
            currentPos = prevPos;
            movesLen--;
        }
    }
}

function updateShortest(movesLen){
    if (movesLen < shortestLen){
        shortestLen = movesLen;
    }
}

function updateResult(){
    return true;
}