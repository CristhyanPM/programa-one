let nEstrellas = document.getElementById("n-estrellas");
let nFilas = document.getElementById("n-filas");

let button = document.getElementById("imprimir");
button.addEventListener("click", imprimir)

function imprimir (estrellas, filas) {
  estrellas = Number(nEstrellas.value);
  filas = Number(nFilas.value);

  function escribe(n){
    let text = ''
    for(let j = 1; j <= n; j++) {
      text += '*'
    }
    return text
  } 
  for(let i = 1; i <= filas; i++) {
    document.body.appendChild(document.createElement("p")).classList.add(`p-${i}`)
    let para = document.querySelector(`.p-${i}`)
    para.innerText = escribe(estrellas)
    // document.write("<br>")
  }

  document.body.appendChild(document.createElement("p")).innerText = "Fin."
}