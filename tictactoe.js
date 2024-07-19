const gameInput = document.querySelector("#gameInput");
const resultDisplay = document.querySelector(".resultDisplay");
const showResultBtn = document.querySelector("#showResultBtn");

showResultBtn.addEventListener("click", updateResult);

function validateEntrySize(entryArr){
    if (entryArr.length === 3){
        for (let i = 0; i < 3; i++){
            if (entryArr[i].length !== 3){
                return false;
            }
        }
    }
    return true;
}

function validateEntryContent(entryArr){
    let entryStr = entryArr.join("");
    const textCharRegex = /^[XO-]$/;
    for (const char of entryStr){
        if (!textCharRegex.test(char)){
            return false;
        }
    }
    return true;
}

function solve(){
    let entry = gameInput.value;
    let entryArr = entry.split(",");
    if (validateEntrySize(entryArr)){
        if (validateEntryContent(entryArr)){
            return checkWin(entryArr);
        }
        return "Corrupted game";
    }
    return "No/Incomplete game";
}

function checkWin(entryArr){
    let entryStr = entryArr.join("");
    if (entryStr.includes("X") || entryStr.includes("O")){
        let entry2DArr = convertTo2DArr(entryArr);
        if (checkRowWin(entry2DArr)){
            return true;
        }
        if (checkColumnWin(entry2DArr)){
            return true;
        }
        if (checkDiagonalWin(entry2DArr)){
            return true;
        }
        return false;
    }
    return "Nobody moved"
}

function convertTo2DArr(array){
    let TwoDArr = [];
    for (let i = 0; i < array.length; i++){
        let row = [];
        for (const char of array[i]){
            row.push(char);
        }
        TwoDArr.push(row);
    }
    return TwoDArr;
}

function checkRowWin(TwoDArr){
    for (let i = 0; i < TwoDArr.length; i++){
        const equalsX = (currentValue) => currentValue === "X";
        const equalsY = (currentValue) => currentValue === "Y";
        if (TwoDArr[i].every(equalsX) || (TwoDArr[i].every(equalsY))){
            return true;
        }
    }
}

function checkColumnWin(TwoDArr){
    let transposedArr = transposeTwoDArr(TwoDArr);
    return checkRowWin(transposedArr);
}

function checkDiagonalWin(TwoDArr){
    let diagonalArr = getDiagonalArr(TwoDArr);
    return checkRowWin(diagonalArr);
}

function getDiagonalArr(TwoDArr){
    let diagonalArr = [[],[]];
    for (let j = 0; j < 3; j++){
        diagonalArr[0].push(TwoDArr[j][j]);
        diagonalArr[1].push(TwoDArr[j][2-j]);
    }
    return diagonalArr;
}

function transposeTwoDArr(TwoDArr){
    let holderArr = [];
    for (let i = 0; i < TwoDArr.length; i++){
        let row = [];
        for (let j = 0; j < TwoDArr.length; j++){
            row.push(TwoDArr[j][i]);
        }
        holderArr.push(row);
    }
    return holderArr;
}

function updateResult(){
    
}