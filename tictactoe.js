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
        if (TwoDArr[i].every(equalsX) || (TwoDArr[i].every(equalsX))){
            return true;
        }
    }
}

function updateResult(){

}