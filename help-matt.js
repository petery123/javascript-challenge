const mapInput = document.querySelector("#mapInput");
const resultBtn = document.querySelector("#resultBtn");

resultBtn.addEventListener('click', updateResult);

const MOVES = [
    [0, 1], //S
    [-1, 1], //SW
    [-1, 0], //W
    [-1,-1], //NW
    [0, -1], //N
    [1, -1], //NE
    [1, 0], //E
    [1, 1] //SE
]
function validateInput(input){
    return Number.isInteger(Math.sqrt(input.split(",").length));
}

function convertToMatrix(input){
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

function updateResult(){
    return true;
}