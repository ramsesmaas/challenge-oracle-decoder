var txtEntrada = "";
var textoSalida = "";
var textoCopiado = "";

//obtener texro de entrada
function getText() {

  return document.getElementById("txtAreaEntrada").value;
}

//fijar texto desencriptado y mostrar div
function setTextOnView(txtToShow) {

  document.getElementById("outputText").innerHTML = txtToShow;
  document.getElementById("card__salida").style.display = "flex";
}



function setTextOnInput(txtToEncrypt) {
  document.getElementById("txtAreaEntrada").value = txtToEncrypt;
}

//obtener texto al dar click en copiar
function getTextToCopy() {
  textoCopiado = document.getElementById("outputText").textContent;
  console.log(textoCopiado);
  return textoCopiado;
}

//quitar div de mensaje desencriptado
function unsetTextOnView() {
  document.getElementById("card__salida").style.display = "none";
}

function copyToInputBox() {
  console.log("copiando al input ");
  //obtener texto de lsa salida
  setTextOnInput(getTextToCopy());

}

//mostrar mensaje por defecto
function unsetExitMsg() {
  //document.getElementById("myP").style.visibility = "hidden";
  document.getElementById("cardMsg").style.display = "none";
}

function setExitMsg() {
  //document.getElementById("myP").style.visibility = "hidden";
  document.getElementById("cardMsg").style.display = "flex";
}



var empty = "";
function Encrypt() {
  
  txtEntrada = getText();

  if (txtEntrada == null || txtEntrada.trim().length === 0) {
    console.log("caja vacia");
    //quitar div desencriptado
    unsetTextOnView();
    //mostrar mensaje por defecto
    setExitMsg();


    return;
  } else {
    for (let index = 0; index < txtEntrada.length; index++) {

      switch (txtEntrada[index]) {
        case "a":
          console.log("tenemos  a");
          textoSalida += "ai";
          break;
        case "e":
          console.log("tenemos  e");
          textoSalida += "enter";
          break;

        case "i":
          console.log("tenemos  i");
          textoSalida += "imes";
          break;
        case "o":
          console.log("tenemos  o");
          textoSalida += "ober";
          break;
        case "u":
          console.log("tenemos  u");
          textoSalida += "ufat";
          break;
        default:
          textoSalida += txtEntrada[index];
          break;
      }
    }
    console.log("FUERA DEL IF");
    //fijar texto en vista

    //limpiar var
    console.log("texto desencriptado: " + textoSalida);
    //quitar div de mensaje vacio
    unsetExitMsg();
    //mandamos el texto a desencriptado y mostramos el card
    setTextOnView(textoSalida);

    //limpiamos variable
    textoSalida = "";


    //limpiar input de entrada
    setTextOnInput("");
  }
}

var bandera = "";
function Decrypt() {

  txtEntrada = getText();
  if (txtEntrada == null || txtEntrada.trim().length === 0) {
    console.log("caja vacia");
    //fijar mensaje
    unsetTextOnView();
    setExitMsg();
    //quitar div desencriptado

    return;
  } else {

    textoSalida = txtEntrada.replace(/ai/g, "a").replace(/ober/g, "o").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ufat/g, "u");

    //limpiar var
    console.log("texto desencriptado: " + textoSalida);
    //quitar div de mensaje vacio
    unsetExitMsg();
    //fijamos texto y su card
    setTextOnView(textoSalida);
    textoSalida = "";

    setTextOnInput("");
    //mostrar boton de copiar

  }
}