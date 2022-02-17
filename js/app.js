let totalExpenses = document.getElementById('total-expenses');
let balance = document.getElementById('balance');
let remainingBalance = document.getElementById('remaining-balance')
let savingAmount = document.getElementById('saving-amount');

// Function for calculating balance after expenses and savings 
function remainingValue(firstValue, secondValue) {
    const result = (firstValue - secondValue);
    return result.toFixed(2);
}

// Function for all inputfield

function getInputValue(item) {
    const inputField = document.getElementById(item + '-input');
    const inputValue = inputField.value;
    // Error message for not putting number
    if (isNaN(inputValue)) {
        alert('Enter only number as ' + item + ' input');
        inputField.value = '';
    }
    // Error message for negative number
    else if (inputValue < 0) {
        alert('Please, enter a positive number in ' + item + ' input field');
        inputField.value = '';
    }
    else {
        const inputValueNumber = parseFloat(inputValue).toFixed(2)
        return parseFloat(inputValueNumber);
    }
}

// Handling calculate button 
document.getElementById('calculate-button').addEventListener('click', function () {
    // Calculating expense & balance
    let totalInputExpenses = getInputValue('food') + getInputValue('rent') + getInputValue('clothes');
    let totalBalance = remainingValue(getInputValue('income'), totalInputExpenses);
    // showing 0 instead of NaN
    if (isNaN(totalInputExpenses) || isNaN(totalBalance)) {
        totalInputExpenses = 0;
        totalBalance = 0;
    }

    totalExpenses.innerText = totalInputExpenses.toFixed(2);
    // Error message if balance is larger than income
    if (totalBalance < 0) {
        alert('Expenses can not be greater than income');
        balance.innerText = 0;
        totalExpenses.innerText = 0;
    }
    else {
        balance.innerText = totalBalance;
    }
})

// Handling save button

document.getElementById('save-button').addEventListener('click', function () {
    // Calculating savings & remaining money
    let totalSaving = getInputValue('income') * (getInputValue('save') / 100);
    let totalRemainingBalance = remainingValue(parseFloat(balance.innerText), totalSaving);
    // Showing 0 instead of NaN
    if (isNaN(totalSaving) || isNaN(totalRemainingBalance)) {
        totalSaving = 0;
        totalRemainingBalance = 0;
    }

    savingAmount.innerText = totalSaving.toFixed(2);
    // Error message if savings is larger than balance 
    if (totalSaving > parseFloat(balance.innerText)) {
        alert('Do not have enough money to save');
        savingAmount.innerText = 0;
        remainingBalance.innerText = 0;
    }
    else {
        remainingBalance.innerText = totalRemainingBalance;
    }

})

