const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d'); // Corrección: 'detext' a 'ctx' para referirse al contexto 2D del canvas

//Contiene las dimensiones de la pantalla actual 
const window_height = window.innerHeight; // Corrección: Eliminación de '=' para definir la constante
const window_width = window.innerWidth; // Corrección: Eliminación de '=' para definir la constante

//El canvas tendrá las mismas dimensiones que la pantalla 
canvas.height = window_height;
canvas.width = window_width;

canvas.style.background = '#ff8';

class Circle {
    constructor(x, y, radio, color, text) {
        this.posX = x;
        this.posY = y;
        this.radio = radio;
        this.color = color;
        this.text = text;
    }

    draw(context) {
        context.beginPath();

        context.strokeStyle = this.color;
        context.textAlign = "center";
        context.textBaseline = "middle";

        context.font = "20px Arial"
        context.fillText(this.text,this.posX,this.posY);
        context.lineWidth=2;
        context.arc(this.posX, this.posY, this.radio, 0, Math.PI * 2, false);
        context.stroke();
        context.closePath();
    }
}

let ArrayCircle = [];
for (let i = 0; i < 10; i++) {
    let randomX = Math.random()*(window_width);
    let  randomY = Math.random()*(window_height);
    let randomRadius = Math.floor(Math.random()*100) + 20;
    let miCirculo = new Circle(randomX, randomY, randomRadius, "blue", i+1); 
    
    //Agrega el objeto al array
    ArrayCircle.push(miCirculo);
    ArrayCircle[i].draw(ctx);
}

/* let miCirculo = new Circle(100, 100, 50, "blue", "Tec"); 
miCirculo.draw(ctx);

let miCirculo2 = new Circle(270, 270, 50, "black","Pachuca"); 
miCirculo2.draw(ctx); */