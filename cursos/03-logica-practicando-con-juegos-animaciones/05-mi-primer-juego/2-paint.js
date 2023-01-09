var pantalla = document.querySelector('canvas');
var pincel = pantalla.getContext('2d');


let paletaColoresDefault = ["blue","green","red"]
let activo = 0
let tamanhoDeColores = 50


pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

var puedoDibujar = false;

function dibujarCirculo(evento) {
  if(puedoDibujar) {
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;
    pincel.fillStyle = paletaColoresDefault[activo];
    pincel.beginPath();
    pincel.arc(x, y, 5, 0, 2 * 3.14);
    pincel.fill();
  }
}

function myfalse() {
  return false
}
pantalla.onmousemove = dibujarCirculo;
pantalla.oncontextmenu = myfalse;

function habilitarDibujar(evento) {
  // Evitamos dibujar partiendo de la paleta
  let x = evento.pageX - pantalla.offsetLeft;
  let y = evento.pageY - pantalla.offsetTop;

  if(
    (x < tamanhoDeColores*paletaColoresDefault.length) && (y < tamanhoDeColores)
  ) {
    puedoDibujar = false;
  } else {
    puedoDibujar = true;
  }

}

function deshabilitarDibujar() {
  puedoDibujar = false;
}

pantalla.onmousedown = habilitarDibujar;

pantalla.onmouseup = deshabilitarDibujar;

// Añadimos y graficamos la paleta de colores
function dibujarPaletaDeColores(paleta,tamanho) {
  let posicionX = 0; 
  paleta.forEach(element => {
    pincel.fillStyle = element;
    pincel.fillRect(posicionX,0,tamanho,tamanho);
    posicionX += tamanho
  });
}

dibujarPaletaDeColores(paletaColoresDefault,tamanhoDeColores)

//Cambiando el color
function cambiarColor(evento) {
  let x = evento.pageX - pantalla.offsetLeft;
  let y = evento.pageY - pantalla.offsetTop;
  if(y < tamanhoDeColores) {
    switch(true) {
      case x < 50:
        activo = 0
        break;
      case (x > 50 && x < 100):
        activo = 1
        break;
      case (x > 100 && x < 150):
        activo = 2
        break;
    }
  }
  console.log(x,y)
}

// console.log(activo)
pantalla.onclick = cambiarColor
// console.log(activo)