window.addEventListener('DOMContentLoaded', function () {

    "use strict";

    let box = document.querySelector('.box'),
        body = document.querySelector('body'),
        btn = document.querySelector('button');

    let width = body.clientWidth,
        height = box.clientHeight;

        console.log(width);
        console.log(height);
        console.log(box.getBoundingClientRect());
        console.log(document.documentElement.clientWidth);
        console.log(document.documentElement.clientHeight);
        console.log(document.documentElement.scrollHeight);

        btn.addEventListener('click', function () {
            box.scrollTop = 0;
        });
});