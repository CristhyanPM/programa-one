let textInput = document.getElementById("texto-de-entrada")
let textOutput = document.getElementById("texto-de-salida")

let btnEncrypt = document.getElementById("boton-encriptar")
let btnDecrypt = document.getElementById("boton-desencriptar")
let btnCopy = document.getElementById("boton-copiar")

function encrypt(string) {
  let arrayString = string.split("")
  let encryptedArray = arrayString.map(e => {
    switch(true) {
      case (e == "a"):
        return "ai"
      case (e == "e"):
        return "enter"
      case (e == "i"):
        return "imes"
      case (e == "o"):
        return "ober"
      case (e == "u"):
        return "ufat"
      default:
        return e
    }
  })
  return encryptedArray.join("")
}

function decrypt(string) {
  let filterA = string.split("ai").join("a")
  let filterE = filterA.split("enter").join("e")
  let filterI = filterE.split("imes").join("i")
  let filterO = filterI.split("ober").join("o")
  let filterU = filterO.split("ufat").join("u")
  return filterU
}

function verifyEmptyTextarea(ele) {
  if(ele.value) {
    return true
  }
  return false
}

btnEncrypt.onclick = () => {
  let string = textInput.value
  textOutput.value = encrypt(string)
  textOutput.style.display = "block"
}
btnDecrypt.onclick = () => {
  let string = textInput.value
  textOutput.value = decrypt(string)
  textOutput.style.display = "block"
}

btnCopy.onclick = () => {
  //La siguiente manera no me funcionno en Android
  // navigator.clipboard.writeText(textOutput.value)

  //A continuación otra forma de seleccionar el texto
  // textOutput.select()
  // textOutput.setSelectionRange(0,9999)

  //Por último la forma que escogí para resolverlo
  textOutput.focus()
  document.execCommand("selectAll")
  document.execCommand("copy")
}