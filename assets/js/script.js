let money, time;

let start = () => {
    do {
        money = +prompt('Ваш бюджет на месяц:');
    } while (isNaN(money) || money == '' || money == null || money < 1);
    time = prompt('Введите дату в формате YYYY-MM-DD');
};

start();

let appData = {
    moneyApp: money,
    timeApp: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};



let chooseOptExpenses = (text, howManyTimes, whereToWrite) => {

    for (let i = 0; i < howManyTimes; i++) {
        let a = prompt(text, ''),
            b = +prompt('Во сколько это обойдется', '');
        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null
            && a != '' && b != '' && a.length < 50) {
            whereToWrite[a] = b;
        } else {
            i--;
        }
    }
    return;
};

chooseOptExpenses('Введите статью обязательных расходов', 1, appData.expenses);

let detectDayBudget = () => {
    appData.moneyPerDay = (appData.moneyApp / 30).toFixed();
    return appData.moneyPerDay;
};

detectDayBudget();

let detectLevel = () => {
    if (appData.moneyPerDay < 100) {
        return console.log(`Минимальный уровень достатка: ${detectDayBudget()}`);
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        return console.log(`Средний уровень достатка: ${detectDayBudget()}`);
    } else if (appData.moneyPerDay > 2000) {
        return console.log(`Высокий уровень достатка: ${detectDayBudget()}`);
    } else {
        return console.log("Fatal Error");
    }
};

chooseOptExpenses('Введите статью нобязательных расходов', 1, appData.optionalExpenses);

detectLevel();

let checkSaving = () => {
    let save, percent;
    if (appData.savings) {
        do {
            save = +prompt('Введите вашу сумму депозита:');
        } while (isNaN(save) || save == '' || save == null || save < 1);
        do {
            percent = +prompt('Введите вашу процентную ставку:');
        }while(isNaN(percent) || percent == '' || percent == null || percent < 1);
    }
    if (save && percent) {
        appData.monthIncome = (save / 100 / 12) * percent;
        console.log(`Доход в месяц с депозита: ${appData.monthIncome}`);
    }
};

checkSaving();
