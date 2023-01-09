let lienzo = document.querySelector("canvas")
let pincel = lienzo.getContext("2d")

pincel.fillStyle = "gray"
pincel.fillRect(0,0,600,400)

function dibujarCirculo(e) {
  let x = e.x - lienzo.offsetLeft
  let y = e.y - lienzo.offsetTop


  pincel.fillStyle = "red"
  pincel.beginPath()
  pincel.arc(x,y,50,0,2*Math.PI)
  pincel.fill()
}

lienzo.onclick = dibujarCirculo
