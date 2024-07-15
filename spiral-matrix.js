const matrixSize = document.querySelector("#matrixSize");
const getSpiralBtn = document.querySelector("#getSpiralBtn");
const result = document.querySelector(".result")

getSpiralBtn.addEventListener("click", updateResult);

let movement = {
    moves: [
        [0, 1], //right
        [1, 0], //down
        [0,-1], //left
        [-1,0], //up
    ],
    moveIndex: 0,
    currentMove: [0, 1],
    nextMove: function(){
        if (this.moveIndex === 3){
            this.moveIndex = 0;
        }else{
            this.moveIndex++;
        }
        this.currentMove = this.moves[this.moveIndex]
    }
}
let currentPos = {
    x: 0,
    y: 0
};

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

function createSpiralMatrix(length){
    if (validLength(length)){
        matrix = createEmptyMatrix(length);
        fillFirstRow(length);
        
        console.log(matrix);
        console.log(movement);
        return matrix;
    }
    return false;
}

function validLength(length){
    return length > 0;
}

function fillFirstRow(length){
    for (i = 1; i <= length; i++){
        matrix[currentPos.x][currentPos.y] = i;
        let x = movement.currentMove[0];
        let y = movement.currentMove[1];
        currentPos.x += x;
        currentPos.y += y;
    }
    movement.nextMove();
}

function updateResult(){
    let length = matrixSize.value;
    if (createSpiralMatrix(length)){
        for (i = 0; i < length; i){
            let row = document.createElement("div");
            row.textContent = matrix[i];
            result.appendChild(row);
        }
    }else{
        result.textContent = "Invalid Entry";
    }    
}
