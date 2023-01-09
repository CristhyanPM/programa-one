let lienzo = document.querySelector("canvas");
let pincel = lienzo.getContext("2d")

pincel.fillStyle = "darkgreen";
pincel.fillRect(0,0,350,300);

pincel.fillStyle = "black";
pincel.fillRect(50,60,90,90);
pincel.fillRect(210,60,90,90);
pincel.fillRect(140,150,70,100);
pincel.fillRect(100,300,40,-110);
pincel.fillRect(210,300,40,-110);



// pincel.fillStyle = "black";
// pincel.fillStyle = "purple";



/*
Rectángulo 1: 350, 300 (cabeza).
Rectángulos 2 y 3: 90, 90 (ojos).
Rectángulo 4: 70, 100 (nariz).
Rectángulos 5 y 6: 40, 110 (parte de la boca). Su canvas debe tener el tamaño de 600 x 400 pixeles.
*/