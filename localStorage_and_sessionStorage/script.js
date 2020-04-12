// localStorage.setItem("number", 1);

// console.log(localStorage.getItem("number"));

// localStorage.removeItem("number");

// localStorage.clear();   

window.addEventListener('DOMContentLoaded', function() {
    
    let checkBox = document.querySelector('#rememberMe'),
        form = document.querySelector('form'),
        mail = document.querySelector('#mail'),
        pass = document.querySelector('#pass'),
        btnSubmit = document.querySelector('#btn-submit'),
        btnCharge = document.querySelector('#btn-charge');

    if (localStorage.getItem('isChecked') === 'true') {
        checkBox.checked = true;
    } else {
        checkBox.checked = false;
    }

    if (localStorage.getItem('bg') === 'changed') {
        form.style.backgroundColor = 'red';
    }

    checkBox.addEventListener('click', function() {
        if (localStorage.getItem('isChecked') === 'false') {
            localStorage.setItem('isChecked', true);
        } else {
            localStorage.setItem('isChecked', false);
        }
    });

    btnCharge.addEventListener('click', function(event) {
        event.preventDefault();
        localStorage.setItem('bg', 'changed');
    });

    let persone = {
        name: 'Alex',
        age: 25,
        tech: ['mobile', 'notebook'],
    };

    let serializedPersone = JSON.stringify(persone);
    localStorage.setItem('Alex', serializedPersone);
});