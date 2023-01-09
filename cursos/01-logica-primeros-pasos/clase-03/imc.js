function imprimir(frase) {
  document.write("<h2>" + frase + "</h2>");
  saltarLinea()
}

function calcularIMC (nombre, peso, altura) {
  return `El IMC de ${nombre} es ${peso / altura**2}`
}

imprimir(calcularIMC("Cr",71,1.72))