window.addEventListener('DOMContentLoaded', function() {

    "use strict";

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

        hideTabContent(1, tabContent);

        info.addEventListener('click', function(event) {
            let target = event.target;
            if (target && target.classList.contains('info-header-tab')) {
                for (let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        hideTabContent(0, tabContent);
                        showTabContent(i, tabContent);
                        break;
                    }
                }
            }
        });
});