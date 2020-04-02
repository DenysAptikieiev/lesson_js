//=================================
//Превращение чего угодно в строку

// String(null);

// console.log(typeof(String(4)));

// console.log('ww' + 5);

// console.log(typeof('ww' + 5));

// console.log('https//vk.com/catalog/' + 5);
//============================================

//============================================
//Превращение строки в число

// 1)

// console.log(typeof(Number('5'))); //Устаревший способ

// 2)

// console.log(typeof(+'5')); //Унарный плюс 

// 3)

// console.log(typeof(parseInt('15px', 10)));

// let answer = +prompt('Hello', '');
//======================================
// 1)

// 0, '', null, undefined, NaN === false

// let switcher = null;

// if (switcher) {
//     console.log('Working...');
// };

// switcher = 1;

// if (switcher) {
//     console.log('Working...');
// }

// 2)

// console.log(typeof(Boolean('5'))); //Преобразование в boolean используется редко

// 3)

// console.log(typeof((!!'5'))); //Преобразование в boolean используется редко

//=============================================

let elements = document.getElementsByTagName('div'),
    elementsQery = document.querySelectorAll('div');

// for (let i = 0; i < elements.length; i++) {
//     elements[i].style.borderRadius = '10px';
// }

elementsQery.forEach(function(item, i, arr) {
    item.style.borderRadius = '10px';
    console.log('item: ', item);
    });
    