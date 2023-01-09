let numerosMaquina = generadorDeNumeros(4);

function generadorDeNumeros(n) {
  let numerosGenerados = []
  let contador = 1;
  while(contador <= n) {
    let generado = Math.floor(Math.random() * 9 + 1)
    if(!numerosGenerados.includes(generado)) {
      numerosGenerados.push(generado)
      contador++
    }
  }
  return numerosGenerados
}
console.log(numerosMaquina);

let input = document.querySelector("input");
let button = document.querySelector("button")

function verificar() {
  let numeroJugador = Number(input.value)
  if(numerosMaquina.includes(numeroJugador)) {
    return alert("Ganaste")
  } else {
    return alert("Perdiste")
  }
}
button.onclick = verificar;