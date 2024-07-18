const resultBtn =  document.querySelector("#resultBtn");
const scaleMassesInput = document.querySelector("#scaleMasses");
const weightsInput = document.querySelector("#weights");
const resultDisplay = document.querySelector(".resultDisplay");

resultBtn.addEventListener("click", updateResult);

let eachSingleArr = false;

function getData(){
    let scaleMassArr = scaleMassesInput.value.split(",");
    let weightsArr = weightsInput.value.split(",");
    let data = [];

    console.log("me")
    if (validateScaleMasses(scaleMassArr)){
        
        data.push(scaleMassArr);
        if (validateWeights(weightsArr)){
            data.push(weightsArr);
            return data;
        }
    }
    return false;
}

function validateScaleMasses(scaleMassArr){
    return scaleMassArr.length === 2;
}

function validateWeights(weightsArr){
    return weightsArr.length >= 2;
}

function solve(){
    let data = getData();
    if (data){
        let max = +data[0][0];
        let min = +data[0][1];
        [max, min] = min > max ? [min, max] : [max, min];
        let weights = data[1].sort().map((element) => {return +element});
        if (weights.includes(max-min)){//checks if a single mass could balance
            return [max-min];
        }else{
            linearSolve(min, max, weights);
            if (eachSingleArr){
                return eachSingleArr;
            }else{
                return doubleMinSolve(min, max, weights);
            }
        }
    }
    return "Invalid Data";
}

function linearSolve(min, max, weights){
    let weightHolder = weights.slice();
    let lastWeight = weightHolder.pop();
    let holdNum = min + lastWeight;
    for (let i = 0; i < weightHolder.length; i++){
        if (holdNum === max + weightHolder[i]){
            eachSingleArr = [weightHolder[i], lastWeight];
            return
        }
    }
    if (weightHolder.length === 1){
        return
    }else{
        linearSolve(min, max, weightHolder);
    }
}

function doubleMinSolve(min, max, weights){
    for (let i = 0; i < weights.length; i++){
        let search = max - (min + weights[i]);
        if (weights.includes(search)){
            return [weights[i], search];
        }
    }
    return "Imbalanced";
}

function updateResult(){
    resultDisplay.textContent = "";
    eachSingleArr = false;
    resultDisplay.textContent = solve();
}