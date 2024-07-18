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
    
}

function updateResult(){
    resultDisplay.textContent = "";
}