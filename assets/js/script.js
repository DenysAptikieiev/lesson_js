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
    chooseExpenses: function (text, howManyTimes, whereToWrite) {
        for (let i = 0; i < howManyTimes; i++) {
            let a = prompt(text, ''),
                b = +prompt('Во сколько это обойдется', '');
            if (typeof (a) === 'string' && isNaN(a) && typeof (a) != null && !isNaN(b) && typeof (b) != null
                && a != '' && b != '' && a.length < 50) {
                whereToWrite[a] = b;
            } else {
                i--;
            }
        }

    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.moneyApp / 30).toFixed();
        console.log(`Ежедневный бюджет: ${appData.moneyPerDay}`);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            return console.log(`Минимальный уровень достатка: ${appData.moneyPerDay}`);
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            return console.log(`Средний уровень достатка: ${appData.moneyPerDay}`);
        } else if (appData.moneyPerDay > 2000) {
            return console.log(`Высокий уровень достатка: ${appData.moneyPerDay}`);
        } else {
            return console.log("Fatal Error");
        }
    },
    checkSaving: function () {
        let save, percent;
        if (appData.savings) {
            do {
                save = +prompt('Введите вашу сумму депозита:');
            } while (isNaN(save) || save == '' || save == null || save < 1);
            do {
                percent = +prompt('Введите вашу процентную ставку:');
            } while (isNaN(percent) || percent == '' || percent == null || percent < 1);
        }
        if (save && percent) {
            appData.monthIncome = (save / 100 / 12) * percent;
            console.log(`Доход в месяц с депозита: ${appData.monthIncome}`);
        }    
    },
    chooseIncome: function () {
        let items;
        do {
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        }while(!isNaN(items) || items == '' || items == null)
        if (items) {
            appData.income = items.split(', ');
            appData.income.push(prompt(`Может что-то еще?`));
            appData.income.sort();
            appData.income.forEach((element, index) => {
                console.log(`Способы доп. заработка ${index + 1}: ${element}`);
            });
        }
    },
    allItemsData: function () {
        for(let key in this) {
            console.log(`Наша программа включает в себя данные: ${key}`);
        }
    },
};

appData.chooseExpenses('Введите статью обязательных расходов', 1, appData.expenses);
appData.detectDayBudget();
appData.chooseExpenses('Введите статью нобязательных расходов', 1, appData.optionalExpenses);
appData.detectLevel();
appData.checkSaving();
appData.chooseIncome();
appData.allItemsData();
