let lienzo = document.querySelector("canvas")
let pincel = lienzo.getContext("2d")

// pincel.fillStyle = "lightgray"
// pincel.fillRect(0,0,600,400)

function dibujarCircunferencia(x,y,radio,color) {
  pincel.fillStyle = color
  pincel.beginPath()
  pincel.arc(x,y,radio,0,2*Math.PI)
  pincel.fill()
}

function limpiarLienzo() {
  pincel.clearRect(0,0,600,400)
}

let starter = 10
let radios = [starter, starter*2, starter*3]
function dibujarObjetivo(x,y, radios) {
  dibujarCircunferencia(x,y,radios[2],"red")
  dibujarCircunferencia(x,y,radios[1],"white")
  dibujarCircunferencia(x,y,radios[0],"red")
}


function generarAleatorio(maximo) {
  return Math.floor(Math.random()*maximo)
}

let ejeX;
let ejeY;

function actualizarLienzo() {
  limpiarLienzo()
  ejeX = generarAleatorio(600)
  ejeY = generarAleatorio(400)
  dibujarObjetivo(ejeX,ejeY,radios)
  // console.log(ejeX,ejeY)
}

setInterval(actualizarLienzo,2000)

// console.log(ejeX,ejeY)

function disparar(e) {
  let x = e.x - lienzo.offsetLeft
  let y = e.y - lienzo.offsetTop
  console.log(x,y)
  console.log(ejeX,ejeY)
  if(
    (x > ejeX - starter/2) &&
    (x < ejeX + starter/2) &&
    (y > ejeY - starter/2) &&
    (y < ejeY + starter/2)
  ) {
    return alert("Tiro acertado")
  }
}
lienzo.onclick = disparar