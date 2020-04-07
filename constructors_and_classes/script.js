// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//         console.log(`hello! ${this.name}`);
//     }
//     exit(name) {
//         console.log(`Пользователь ${this.name} ушел`);
//     }
// }


// let denys = new User('Denys', 25);
// let alex = new User('Alex', 20);
// console.log(denys);
// console.log(alex);
// "use strict";

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis(1, 3);
// showThis(3, 6);

// "use strict";

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();


// let user = {
//     name: 'John',
// };

// function sayName(surName) {
//     console.log(this);
//     console.log(this.name + surName);
// }

// console.log(sayName.call(user, 'Smith'));
// console.log(sayName.apply(user, ['Snow']));

// function count(number) {
//     return this * number;
// }

// let double = count.bind(2);

// console.log(double(3));
// console.log(double(10));

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this);
    this.style.background = 'red';
    function showThis() {
        console.log(this);
    }
    showThis();
});

// 1) Просто вызов функции - window/undefined
// 2) Метод объекта - this = object
// 3) Конструктор (new) - this = новый созданный объект
// 4) Указание конкретного контекста - call, apply, bind