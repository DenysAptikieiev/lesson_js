let btn = document.querySelector('#btn-anim'),
elem = document.querySelector('.elem-animated');

function myAnimation () {
    let pos = 0;
    let id = setInterval(frame, 10);

    function frame () {
        if (pos == 300) {
            clearInterval();
        } else { 
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);