let resultTable = document.querySelectorAll('.result-table div');
let obligatoryExpenses = document.querySelectorAll('.expenses-item');
let optionalExpenses = document.querySelectorAll('.optionalexpenses-item');
let chooseIncome = document.querySelector('.choose-income');
let savings = document.querySelector('#savings');
let chooseSum = document.querySelector('.choose-sum');
let choosePercent = document.querySelector('.choose-percent');

let btn = document.getElementsByTagName('button');
let btnStartCalculation = document.getElementById('start');
let btnApproveRequiredCosts = btn[0];
let btnApproveOptionalCosts = btn[1];
let btnCalculation = btn[2];

let elementsValue = [];

resultTable.forEach((item, i) => {
    if(item.className.indexOf('value') != -1) {
        elementsValue.push(item);
    }
});

