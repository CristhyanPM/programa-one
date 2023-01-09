var inicioDeSesionRegistrado = "alura";
var contrasenhaRegistrada = "alura321";



let contador = 1;
while(contador <= 3) {
  var inicioDeSesionIngresado = prompt("Ingrese su usuario");
  var contrasenhaIngresada = prompt("Ingrese su contraseña");
  if( inicioDeSesionRegistrado == inicioDeSesionIngresado && contrasenhaRegistrada == contrasenhaIngresada ) {
    alert("Bienvenido al sistema " + inicioDeSesionIngresado);
    break;
  } else {
      alert("inicio de sesión inválido. Favor intente de nuevo");
  }
  contador++
}
if(contador == 4) {
  alert("Número de intentos fallidos alcanzado. Cuenta Bloqueada");
}
