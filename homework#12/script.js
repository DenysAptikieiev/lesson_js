class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    creatDiv() {
        let elem = document.querySelector('body'),
            div = document.createElement('div');
            div.textContent = 'Hello world!';
            div.style.height = this.height;
            div.style.width = this.width;
            div.style.background = this.bg;
            div.style.fontSize = this.fontSize;
            div.style.textAlign = this.textAlign;
            elem.appendChild(div);
        }
}

let params = ['250px', '250px', 'red', '18px', 'center'];
let params2 = ['100px', '100px', 'lightblue', '1.5em', 'left']

let div1 = new Options(...params);
let div2 = new Options(...params2);

div1.creatDiv();
div2.creatDiv();
