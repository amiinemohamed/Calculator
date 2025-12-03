let Calculation = '';
let stringCalculation;
let historyArray=[];
const buttonElement = document.querySelector('.result');
const historyElement = document.querySelector('.js-history-result');

function updateDisplay(text) {
    buttonElement.innerHTML = text;
}

function calculation2 (key){
    Calculation += key;
    updateDisplay(Calculation);
}

function storeHistory(CalculationAsString){
    historyArray.push(CalculationAsString);
    localStorage.setItem("history", JSON.stringify(historyArray));
}

let storedHistory = JSON.parse(localStorage.getItem("history")) || [];
historyArray = storedHistory;

function renderHistory(){
    let historyResult = '';
    
    for(let i = 0; i < historyArray.length; i++){
        historyResult += `<div class="history-tab">${historyArray[i]}</div>`;
    }
    if(historyResult === ''){
        historyElement.innerHTML = 'Try some Calculation.';
    } else {
        historyElement.innerHTML = historyResult;
    }
}

function clearHistory(){
    localStorage.clear();
    historyArray= [];
    historyElement.innerHTML = "No history yet.";
}




