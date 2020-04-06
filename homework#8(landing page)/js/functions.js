window.addEventListener('DOMContentLoaded', function() {

    "use strict";

    let hideTabContent = (item, elem) => {
        for (let i = item; i < elem.length; i++) {
            elem[i].classList.remove('show');
            elem[i].classList.add('hide');
        }
    };

    let showTabContent = (index, elem) => {
        if (elem[index].classList.contains('hide')) {
                elem[index].classList.remove('hide');
                elem[index].classList.add('show');
        }
    };

});