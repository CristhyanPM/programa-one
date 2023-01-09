let lienzo = document.querySelector("canvas")
let pincel = lienzo.getContext("2d")

pincel.fillStyle = "gray"
pincel.fillRect(0,0,600,400)

function dibujarCircunferencia(x,y,radio) {
  pincel.fillStyle = "blue"
  pincel.beginPath()
  pincel.arc(x,y,radio,0,2*Math.PI)
  pincel.fill()
}

// dibujarCircunferencia(0,50,50)
function limpiarLienzo() {
  pincel.clearRect(0,0,600,400)
}
// limpiarLienzo()
let ejeX = 50
let sentido = 1

function moviendoElCirculo() {
  limpiarLienzo()
  dibujarCircunferencia(ejeX,50,50)
  if(sentido == 1) {ejeX++}
  if(ejeX == 550) {sentido = 2}
  if(sentido == 2) {ejeX -= 1}
  if(ejeX == 50) {sentido = 1}
}


setInterval(moviendoElCirculo,5)