let lienzo = document.querySelector("canvas")
let pincel = lienzo.getContext("2d")

pincel.fillStyle = "gray"
pincel.fillRect(0,0,600,400)

function mostrarAlerta(a) {
  console.log(a)
  // alert("Usted a clikado")
}

lienzo.onclick = mostrarAlerta