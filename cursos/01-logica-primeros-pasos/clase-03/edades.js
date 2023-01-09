let edadA = 32;
let edadB = 26;

function saltarLinea() {
  document.write("<br>");
  document.write("<hr>");
}

function imprimir(frase) {
  document.write("<h2>" + frase + "</h2>");
  saltarLinea()
}

imprimir("La diferencia de edad es: " + (edadA - edadB))