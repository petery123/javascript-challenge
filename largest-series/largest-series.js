const checkResultBtn = document.querySelector("#checkResultBtn");
const integerList = document.querySelector("#integerList");
const numOfSeries = document.querySelector("#numOfSeries");
const result = document.querySelector("#result");

checkResultBtn.addEventListener("click", solve);

function solve(){
    let largest = 0;
    const num = +numOfSeries.value;
    const numList = integerList.value;
    if (validInput(num, numList)){
        console.log("pass")
        let arr = numList.split("").map(((element) => {return +element}));
        const repeatLen = arr.length-(num);
        for (i = 0; i <= repeatLen; i++){
            let hold_arr = arr.slice(i, (i+num));
            if (hold_arr.includes(0)){
                i += hold_arr.indexOf(0);
                continue;
            }
        }
    }
    return "Ivalid Input";
};

function validInput(num, arr){
    let allDigitsRegex = /^\d+$/;
    if (allDigitsRegex.test(num) && allDigitsRegex.test(arr)){
        if (num <= arr.length){
            return true;
        }
    }
    return false;
}