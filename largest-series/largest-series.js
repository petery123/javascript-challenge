const checkResultBtn = document.querySelector("#checkResultBtn");
const integerList = document.querySelector("#integerList");
const numOfSeries = document.querySelector("#numOfSeries");
const result = document.querySelector("#result");

const largestResult = document.querySelector("#largestResult");
const largestListResult = document.querySelector("#largestListResult");
const largestPositionResult = document.querySelector("#largestPositionResult");

checkResultBtn.addEventListener("click", solve);

function solve(){
    const num = +numOfSeries.value;
    const numList = integerList.value;
    if (validInput(num, numList)){
        let arr = numList.split("").map(((element) => {return +element}));
        let largestData = {
            largest : 0,
            list : arr.slice(0, num),
            startPositon : 0,
        };
         //if highest ends up being 0 will be the first set
        const repeatLen = arr.length-(num);
        for (i = 0; i <= repeatLen; i++){
            let hold_arr = arr.slice(i, (i+num));
            if (hold_arr.includes(0)){
                i += hold_arr.indexOf(0);
                continue;
            }
            if (multiply(hold_arr) > largestData.largest){
                largestData.largest = multiply(hold_arr);
                largestData.list = hold_arr;
                largestData.startPositon = i;
            }
            updateDisplay(largestData.largest, largestData.list, largestData.startPositon);
        }
    }else{
        alert("Invalid Input!")
    }
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

function updateDisplay(largest, arrOfLargest, startPositon){
    largestResult.textContent = largest;
    largestListResult.textContent = arrOfLargest;
    largestPositionResult.textContent = startPositon;
}