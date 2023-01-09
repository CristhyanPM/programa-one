let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 600, 400);

function dibujarCirculo(x, y, radio, color) {

    pincel.fillStyle = color;
    pincel.beginPath();
    pincel.arc(x, y, radio, 0, 2*3.14);
    pincel.fill();
}

function dibujarFlor(x,y,radio) {
  let radioCirculo = radio/3;
  let separacion = 2*radioCirculo;

  dibujarCirculo(x,y,radioCirculo, "red")
  dibujarCirculo(x+separacion,y,radioCirculo, "black")
  dibujarCirculo(x,y+separacion,radioCirculo, "blue")
  dibujarCirculo(x-separacion,y,radioCirculo, "orange")
  dibujarCirculo(x,y-separacion,radioCirculo, "yellow")
}

dibujarFlor(300,200,350)