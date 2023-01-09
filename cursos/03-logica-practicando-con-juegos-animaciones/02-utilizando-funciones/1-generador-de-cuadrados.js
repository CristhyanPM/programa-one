let lienzo = document.querySelector("canvas");
let pincel = lienzo.getContext("2d");

function dibujarCuadrado (x,y,color,n = 1) {
  let contador = 1;
  while (contador <= n) {
    pincel.fillStyle = color;
    pincel.fillRect(x +50*contador,y,50,50);
    pincel.strokeStyle = "black";
    pincel.strokeRect(x +50*contador,y,50,50)
    contador++
  }
};

dibujarCuadrado(0,0,"red",10);
dibujarCuadrado(0,50,"green",10);
dibujarCuadrado(0,100,"blue",10);