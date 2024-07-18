const resultBtn =  document.querySelector("#resultBtn");
const scaleMassesInput = document.querySelector("#scaleMasses");
const weightsInput = document.querySelector("#weights");
const resultDisplay = document.querySelector(".resultDisplay");

resultBtn.addEventListener("click", updateResult);

function getData(){
    let scaleMassArr = scaleMassesInput.textContent.split(",");
    let weightsArr = weightsInput.textContent.split(",");
    let data = [];

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
        let max = data[0][0];
        let min = data[0][1];
        [max, min] = min > max ? [min, max] : [max, min];
        let weights = data[1];
        if (weights.includes(max-min)){//checks if a single mass could balance
            return [max-min];
        }
    }
    return false;
}

function updateResult(){
    resultDisplay.textContent = "";
}