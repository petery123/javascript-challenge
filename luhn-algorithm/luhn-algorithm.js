const validateBtn = document.querySelector("#validateBtn");
const resultDisplay = document.querySelector("#result");
const inputValue = document.getElementById("inputValue")

validateBtn.addEventListener("click", updateDisplay);
inputValue.addEventListener("")

function updateDisplay(){
    resultDisplay.textContent = entryValidator();
}

function entryValidator(){
    let entry = inputValue.value;
    entry = entry.replace(/\s+/g, '');
    if (!hasOnlyNumbers(entry) || entry.length <= 1){
        return "Invalid"
    }
    let entryArr = entry.split("").reverse();
    for (i = 1; i < entryArr.length; i+=2){
        entryArr[i] *= 2; 
    }
    if (checksumValue(entryArr) % 10 === 0){
        return "Valid"
    }
    return "Invalid"
}

function hasOnlyNumbers(string){
    return /^\d+$/.test(string);
}

function checksumValue(array){
    return array.map((element) => processValOverTen(element)).reduce((total, current) => total + current);
}

function processValOverTen(value){
    if (+value >= 10){
        let arr = String(value).split("")
        return (sum(...arr));
    }
    return +value;
}

function sum(a, b){
    return a + b;
}