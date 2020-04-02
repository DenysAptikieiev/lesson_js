window.onload = () => {
//==========================================
//Получение элементов
let body = document.querySelector('body');
let menu = document.querySelector('.menu');
let itemMenu = document.querySelectorAll('.menu-item');
let title = document.querySelector('#title');
let column = document.querySelectorAll('.column');
let advertising = document.querySelector('.adv');
let answerUserBlock = document.querySelector('#prompt');
let askUserAboutApple;
//===========================================
//Создание и добавление пункта меню
itemMenu[1].textContent = 'Второй пункт';
itemMenu[2].textContent = 'Третий пункт';

let itemMenu5 = document.createElement('li');
itemMenu5.classList.add('menu-item');
itemMenu5.textContent = 'Пятый пункт';
menu.appendChild(itemMenu5);

//============================================
//Изменение заголовка
title.textContent = 'Мы продаем только подлинную технику Apple';

//============================================
//Удаление рекламы со страницы
column[1].removeChild(advertising);
//============================================
//Вопрос пользователю и запись в блок '#prompt'
    if (body) {
        do {
            askUserAboutApple = prompt('Каково ваше отношение к технике apple?');
        }while(askUserAboutApple == '' || askUserAboutApple === null);
        if (askUserAboutApple) {
            answerUserBlock.textContent = askUserAboutApple;
        }
    }
};
//============================================



