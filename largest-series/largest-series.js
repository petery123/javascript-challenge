const checkResultBtn = document.querySelector("#checkResultBtn");
const integerList = document.querySelector("#integerList");
const numOfSeries = document.querySelector("#numOfSeries");
const result = document.querySelector("#result");

checkResultBtn.addEventListener("click", solve);

function solve(){
    if (validInput()){

    }
    return "Ivalid Input";
};

function validInput(){
    let allDigitsRegex = /^\d+$/;
    if (allDigitsRegex.test(integerList.value) && allDigitsRegex.test(numOfSeries.value)){
        if (numOfSeries.value <= integerList.value.length){
            return true;
        }
    }
    return false;
}