let lienzo = document.querySelector("canvas")
let pincel = lienzo.getContext("2d")

pincel.fillStyle = "gray"
pincel.fillRect(0,0,600,400)

let availableColors = ["blue", "red", "green"]
let marker = 0

function dibujarCirculo(e) {
  // let innerColor = color
  let x = e.x - lienzo.offsetLeft
  let y = e.y - lienzo.offsetTop

  pincel.fillStyle = availableColors[marker]
  pincel.beginPath()
  pincel.arc(x,y,50,0,2*Math.PI)
  pincel.fill()
}

function changeColor() {
  marker++
  if(marker == availableColors.length) {marker = 0}

  return false
}


lienzo.onclick = dibujarCirculo
lienzo.oncontextmenu = changeColor