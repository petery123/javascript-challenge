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
    const textCharRegex = /^[X0-]$/;
    for (const char of entryStr){
        if (!textCharRegex.test(char)){
            return false;
        }
    }
    return true;
}

function updateResult(){

}