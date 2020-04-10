// let options = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font: {
//         size: '16px',
//         color: '#fff',
//     },
// };

// let string = JSON.stringify(options);
// console.log(JSON.parse(string));

let inputUSD = document.querySelector('#usd'),
    inputUAH = document.querySelector('#uah');

    inputUAH.addEventListener('input', () => {
        let request = new XMLHttpRequest();
        console.log('request: ', request);
        // request.open(method, url, async, login, pass);
        request.open('GET', 'data.json');
        request.setRequestHeader('Content-type', 'application/json', 'charset=utf-8');
        request.send();

        //status 
        //statusText
        //responseText / response
        //readyState

        request.addEventListener('readystatechange', function() {
            if (request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.response);

                inputUSD.value = inputUAH.value / data.usd;
            } else {
                inputUSD.value = "Что-то пошло не так!";
            }
        });
    });