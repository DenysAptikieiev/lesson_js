// let name = 'Denys',
//     age = 29,
//     mail = 'ex@mail.com';

// document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`);

// function makeArray() {
//     let items = [];

//     for (let i = 0; i < 10; i++) {
//         let item = function () {
//             console.log(i);n 
//         };
//         items.push(item);

//     }
//     return items;
// };

// let arr = makeArray();

// arr[1]();
// arr[4]();
// arr[6]();

// let fun = () => {
//     console.log(this);
// };

// fun();

let obj = {
    number: 5,
    sayNumber: function() {
        let say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let show = () => {
        console.log(this);
    };
    show();
});

function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(5);
calcOrDouble(3, 8);

class Rectangle {
    constructor(height, widht = 20) {
        this.height = height;
        this.widht = widht;
    }
    calcArea() {
        return this.height * this.widht;
    }
}

const square = new Rectangle(10);

console.log(square.calcArea());

// spread

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

    console.log(internet);

    function log(a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(a + b + c);
    }

    let numbers = [2, 5 ,7];

    log(...numbers);

