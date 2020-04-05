let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optinalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    icomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

startBtn.addEventListener('click', function (event) {
    let start = () => {
        time = prompt('Введите дату в формате YYYY-MM-DD');
    
        do {
            money = +prompt('Ваш бюджет на месяц:');
        } while (isNaN(money) || money == '' || money == null || money < 1);
    
        appData.moneyApp = money;
        appData.timeApp = time;
        budgetValue.textContent = money.toFixed();
        yearValue.value = new Date(Date.parse(time)).getFullYear();
        monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
        dayValue.value = new Date(Date.parse(time)).getDate();
    };
    start();
});


expensesBtn.addEventListener('click', function (event) {
    if (appData.moneyApp != undefined) {
        let sum = 0;
        for (let i = 0; i < expensesItem.length; i++) {
            let a = expensesItem[i].value,
                b = expensesItem[++i].value;
            if (typeof (a) === 'string' && isNaN(a) && typeof (a) != null && !isNaN(b) && typeof (b) != null
                && a != '' && b != '' && a.length < 50) {
                console.log('Very good!');
                appData.expenses[a] = +b;
                sum += +b;
                expensesValue.textContent = sum;
            } else {
                i--;
            }
        }
    } else {
        alert(`Произошла ошибка! Начните расчет!`);
    }
});

optinalExpensesBtn.addEventListener('click', function () {
    if (appData.moneyApp != undefined) {
        for (let i = 0; i < optionalExpensesItem.length; i++) {
            let opt = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = opt;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
    } else {
        alert(`Произошла ошибка! Начните расчет!`);
    }
});

countBtn.addEventListener('click', function () {
    if (appData.moneyApp != undefined) {

        if(appData.expenses != undefined) {
            let sum = 0;
            for(let key in appData.expenses) {
                sum += appData.expenses[key];
            }
            appData.moneyApp -= sum;
        }

        appData.moneyPerDay = (appData.moneyApp / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            return levelValue.textContent = `Минимальный уровень достатка!`;
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            return levelValue.textContent = `Средний уровень достатка!`;
        } else if (appData.moneyPerDay > 2000) {
            return levelValue.textContent = `Высокий уровень достатка!`;
        } else {
            return levelValue.textContent = `Fatal Error`;
        }
    } else {
        dayBudgetValue.textContent = `Произошла ошибка! Начните расчет!`;
    }
});

icomeItem.addEventListener('change', function () {
    let items = icomeItem.value;
    appData.income = items.split(',  ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.savings === true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = (sum / 100 / 12) * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings === true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = (sum / 100 / 12) * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    moneyApp: money,
    timeApp: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

