function imprimirConSalto(frase, nroSaltos = 0) {
  document.write("<h2>" + frase + "</h2>")
  let i = 0
  while(i < nroSaltos) {
    document.write("<br>")
    i++
  }
}

let partidosGanados = parseInt(prompt('¿Cuantos partidos GANÓ?'))
let partidosEmpatados = parseInt(prompt('¿Cuantos partidos EMPATÓ?'))
let puntosTemporadaAnterior = parseInt(prompt('Cuántos puntos hizo el año pasado?'))

function calcularPuntos (pg,pe, ptsAnterior = 0) {
  let puntos = pg * 3 + pe;
  imprimirConSalto(`El equipo acumuló un total de: ${puntos} puntos`, 2)
  if(ptsAnterior > puntos) {
    return document.write('El equipo ha tenido un <strong>peor</strong> rendimiento')
  } else {
    return document.write('El equipo ha tenido un <strong>mejor</strong> rendimiento')
  }
}

calcularPuntos(partidosGanados, partidosEmpatados, puntosTemporadaAnterior)