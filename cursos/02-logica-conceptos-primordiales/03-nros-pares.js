let nroInicial = parseInt(prompt("Dónde empezamos?"))
let nroFinal = parseInt(prompt("Dónde acabamos?"))

function imprimePares (a, z) {
  let i;
  if(a % 2 == 0) { i = a }
  else { i = a+1 }

  while (i < z) {
    document.write(i)
    document.write("<br>")
    i+=2
  }

  document.write("<br>")
  document.write("FIN.")
}

imprimePares(nroInicial, nroFinal)