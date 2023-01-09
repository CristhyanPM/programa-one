let lienzo = document.querySelector("canvas");
let pincel = lienzo.getContext("2d")

pincel.fillStyle = "blue";
pincel.fillRect(0,0,200,400);

pincel.fillStyle = "yellow";
pincel.fillRect(400,0,200,400);

pincel.fillStyle = "purple";
pincel.beginPath()
pincel.moveTo(300,200)
pincel.lineTo(200,400)
pincel.lineTo(400,400)
pincel.fill()

pincel.fillStyle = "green"
pincel.beginPath()
// pincel.moveTo(300,200)
pincel.arc(300,200,50,0,3.141672*2)
pincel.fill()