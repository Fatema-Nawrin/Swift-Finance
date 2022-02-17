
let totalExpenses = document.getElementById('total-expenses');
let balance = document.getElementById('balance');
let remainingBalance = document.getElementById('remaining-balance')

// function for calculating balance after expense and savings 
function remainingValue(firstValue, secondValue) {
    const result = (firstValue - secondValue);
    return result.toFixed(2);
}

// function for all inputfield
// 
function getInputValue(item) {
    const inputField = document.getElementById(item + '-input');
    const inputValue = inputField.value;

    // Error message for not putting number
    if (isNaN(inputValue)) {
        alert('Enter only number');
        inputField.value = '';
    }
    // Error message for negative number
    else if (inputValue < 0) {
        alert('Please, Enter a positive number in ' + item + ' input field');
        inputField.value = '';
    }
    else {
        return parseFloat(inputValue);
    }
}

document.getElementById('calculate-button').addEventListener('click', function () {
    const totalIncome = getInputValue('income');
    const totalInputExpenses = getInputValue('food') + getInputValue('rent') + getInputValue('clothes');
    const totalBalance = remainingValue(totalIncome, totalInputExpenses);
    // showing 0 instead of NaN
    if (isNaN(totalInputExpenses) || isNaN(totalBalance)) {
        totalInputExpenses = 0;
        totalBalance = 0;
    }

    totalExpenses.innerText = totalInputExpenses;
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

document.getElementById('save-button').addEventListener('click', function () {
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = parseFloat(balance.innerText) * (getInputValue('save') / 100);
    const totalSaving = parseFloat(savingAmount.innerText);
    const totalBalance = parseFloat(balance.innerText);
    remainingBalance.innerText = remainingValue(totalBalance, totalSaving)


})

