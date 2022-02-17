// const incomeInput = document.getElementById('income-input');
let totalExpenses = document.getElementById('total-expenses');
let balance = document.getElementById('balance');
let remainingBalance = document.getElementById('remaining-balance')

function remainingValue(firstValue, secondValue) {
    const result = (firstValue - secondValue);
    return result.toFixed(2);
}
function getInputValue(item) {
    const itemInput = parseFloat(document.getElementById(item + '-input').value);
    return itemInput;
}

document.getElementById('calculate-button').addEventListener('click', function () {
    const totalInputExpenses = getInputValue('food') + getInputValue('rent') + getInputValue('clothes')
    //  parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothesInput.value);
    totalExpenses.innerText = totalInputExpenses;
    const totalIncome = getInputValue('income')
    balance.innerText = remainingValue(totalIncome, totalInputExpenses);
})

document.getElementById('save-button').addEventListener('click', function () {
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = parseFloat(balance.innerText) * (getInputValue('save') / 100);
    const totalSaving = parseFloat(savingAmount.innerText);
    const totalBalance = parseFloat(balance.innerText);
    remainingBalance.innerText = remainingValue(totalBalance, totalSaving)
})