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
            let param = `height: ${this.height}px; 
                         width: ${this.width}px;
                         background-color:${this.bg};
                         font-size: ${this.fontSize}px;
                         text-align: ${this.textAlign};
            `;
            div.style.cssText = param;
            elem.appendChild(div);
        }
}

let params = ['250', '250', 'red', '18', 'center'];
let params2 = ['100', '100', 'lightblue', '25', 'left']

let div1 = new Options(...params);
let div2 = new Options(...params2);

div1.creatDiv();
div2.creatDiv();
