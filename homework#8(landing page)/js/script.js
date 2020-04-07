window.addEventListener('DOMContentLoaded', function() {

    "use strict";
    // TABS
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

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
        //===================================================================
        //TIMER

        let deadLine = '2020-04-08';

        let getTimeRemaining = (endTime) => {
            let total = Date.parse(endTime) - Date.parse(new Date()),
                seconds = Math.floor((total/1000) % 60),
                minutes = Math.floor((total/1000/60) % 60), 
                hours = Math.floor(total/(1000*60*60));
                
                return {
                    'total': total,
                    'hours': hours,
                    'minutes': minutes,
                    'seconds': seconds,
                };
        };

        let setClock = (id, endTime) => {
            let timer = document.getElementById(id),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds'),
                timeInterval = setInterval(updateClock, 1000);

                function updateClock() {

                    let t = getTimeRemaining(endTime);

                    for (let key in t) {
                        if (key != 'total') {
                            if (t[key] < 10) {
                                t[key] = '0' + t[key];
                            } 
                        }
                    }

                    if (t.hours > 59) {
                        hours.textContent = '59';
                    } else {
                        hours.textContent = t.hours;
                    }

                    minutes.textContent = t.minutes;
                    seconds.textContent = t.seconds;
                    
                    if (t.total < 0) {
                        clearInterval(timeInterval);
                        hours.textContent = '00';
                        minutes.textContent = '00';
                        seconds.textContent = '00';
                    }
                }
        };

        setClock('timer', deadLine);
        //====================================================================
        //MODAL

        let more = document.querySelector('.more'),
            overlay = document.querySelector('.overlay'),
            close = document.querySelector('.popup-close');

            more.addEventListener('click', function() {
                overlay.style.display = 'block';
                this.classList.add('more-splash');
                document.body.style.overflow = 'hidden';
            });

            close.addEventListener('click', function() {
                overlay.style.display = 'none';
                more.classList.remove('more-splash');
                document.body.style.overflow = '';

            });

});