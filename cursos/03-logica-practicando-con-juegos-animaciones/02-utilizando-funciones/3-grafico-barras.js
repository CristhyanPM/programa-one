let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

let serie2009 = [6, 47, 41, 3, 3];
let serie2019 = [81, 9, 3, 3, 4];

let colores = ["blue","green","yellow", "red","gray"];

function dibujarRectangulo(x, y, base, altura, color) {
  pincel.fillStyle=color;
  pincel.fillRect(x,y, base, altura);
  pincel.strokeStyle="black";
  pincel.strokeRect(x,y, base, altura);
}

function escribirTexto(x , y, texto) {
  pincel.font="15px Georgia";
  pincel.fillStyle="black";
  pincel.fillText(texto, x, y);
}

function dibujarBarra(x,y,serie,colores,texto) {
  escribirTexto(x, y-16, texto)
  let acumuladoY = y
  for(let i=0; i <= serie.length; i++) {
    dibujarRectangulo(x, acumuladoY, 50, serie[i], colores[i])
    acumuladoY += serie[i]
  }
}

dibujarBarra(50, 50, serie2009, colores, "2009");
dibujarBarra(150, 50, serie2019, colores, "2019");