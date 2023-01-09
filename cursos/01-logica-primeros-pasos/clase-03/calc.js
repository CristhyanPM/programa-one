let carTank = 40;
let gasolineDistance = 480;
let alcoholDistance = 300;

let gasolineEff = gasolineDistance / carTank;
let alcoholEff = alcoholDistance / carTank;

function saltoLinea () {
  document.write("<br>")
  document.write("<br>")
  document.write("<br>")
}
document.write(`La eficiencia del carro con gasolina es: ${gasolineEff}km/L`)
document.write(saltoLinea())
document.write(`La eficiencia del carro con alcohol es: ${alcoholEff}km/L`)