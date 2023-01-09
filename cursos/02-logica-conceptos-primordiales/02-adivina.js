let tuNumero = parseInt(prompt("Intenta adivinar el número de la máquina:"))

function sorteo (n) {
  return Math.round(Math.random() * n)
}
function juego (nro) {
  let numeroDeLaMaquina = sorteo(10)
  if (nro == numeroDeLaMaquina) return document.write('Ganáste!!')
  else {document.write('Perdiste :P el número fue ' + numeroDeLaMaquina)}
}

juego(tuNumero)