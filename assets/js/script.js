const money = parseInt(prompt('Ваш бюджет на месяц:'));
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    moneyApp: money,
    timeApp: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

let expenseItem1 = prompt('Введите обязательную статью разходов в этом месяце:', ''),    
    expenseItem2 = parseInt(prompt('Во сколько обойдется?', '')),
    expenseItem3 = prompt('Введите обязательную статью разходов в этом месяце:', ''),    
    expenseItem4 = parseInt(prompt('Во сколько обойдется?', ''));

appData.expenses[expenseItem1] = expenseItem2;
appData.expenses[expenseItem3] = expenseItem4;

alert(appData.moneyApp / 30);