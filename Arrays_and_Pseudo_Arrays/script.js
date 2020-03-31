// let arr = [1, 2, 3, 4, 5];

// arr.pop();
// arr.push('5');
// arr.shift();
// arr.unshift('1');

// for (let i = 0; i < arr.length; i++) {
//     console.log('arr: ' + i + ' ', arr[i]);
// }
//     console.log('arr: ', arr);

// arr.forEach(function(item, index, arr) {
//     console.log(index + ': ' + item + ' (Array: ' + arr + ')');
// });

// for (let index of arr) {
//     console.log(index);
// }

// let ans = prompt('', ''),
//     arr = [];

// arr = ans.split(',');
// console.log('arr: ', arr);


// let arr = ['aaa', 'zzz', 'pp', 'asds'],
//     i = arr.join(' - ');

//     console.log(i);

// let arr = [1, 14, 2],
//     i = arr.sort(function(a,b) {
//         return a-b;
//     });
//     console.log('arr: ', arr);

//======================================

let soldier = {
    health: 400,
    armor: 100,
};
 
let john = {
    health: 100,
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);