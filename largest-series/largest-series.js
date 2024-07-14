const checkResultBtn = document.querySelector("#checkResultBtn");
const integerList = document.querySelector("#integerList");
const numOfSeries = document.querySelector("#numOfSeries");
const result = document.querySelector("#result");

checkResultBtn.addEventListener("click", solve);

function solve(){
    const num = +numOfSeries.value;
    const numList = integerList.value;
    if (validInput(num, numList)){
        let arr = numList.split("").map(((element) => {return +element}));
        let startIndex = 0;
        let largest = 0;
        let arrOfLargest = arr.slice(0, num); //if highest ends up being 0 will be the first set
        const repeatLen = arr.length-(num);
        for (i = 0; i <= repeatLen; i++){
            let hold_arr = arr.slice(i, (i+num));
            if (hold_arr.includes(0)){
                i += hold_arr.indexOf(0);
                continue;
            }
            if (multiply(hold_arr) > largest){
                largest = multiply(hold_arr);
                arrOfLargest = hold_arr;
                startPositon = i;
            }
            console.log(largest);
            console.log(arrOfLargest);
            console.log(startPositon);
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

function multiply(arr){
    return arr.reduce((multiplied, current) => multiplied * current);
}