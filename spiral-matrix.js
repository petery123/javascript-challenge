const MOVES = [
    [1,0], //right
    [0,1], //down
    [-1,0], //left
    [0,-1] //up
]

const matrixSize = document.querySelector("#matrixSize");

function createEmptyMatrix(length){
    let emptyMatrix = [];
    let row = [];
    for (i = 0; i < length; i++){
        row.push(0);
    };
    for (i = 0; i < length; i++){
        emptyMatrix.push(row.slice());
    };
    return emptyMatrix;
}

console.log(createEmptyMatrix(5));