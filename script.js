//FUNCION IMAGENES

var fondos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

var fondosError = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] 

var fondo = document.getElementById('imagen');
var indicFondo = 0;

function cambiarFondo() {
   indicFondo = Math.floor(Math.random() * fondos.length);
   fondo.src = `./mtr/${fondos[indicFondo]}.png`;
}

function fondoError() {
   indicFondo = Math.floor(Math.random() * fondosError.length);
   fondo.src = `./error/${fondosError[indicFondo]}.png`;
}

function imprimirError() {
   document.getElementById('pizarra').innerHTML = "¡Ups, no se aceptan mayúsculas, acentos o caracteres especiales!";
   fondoError();
   document.getElementById('botoncopiar').style.display = 'none';
}

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
"La letra "o" es convertida para "ober
La letra "a" es convertida para "ai"
La letra "u" es convertida para "ufat"*/

//FUNCIÓN ENCRIPTAR
var btnEncriptar = document.getElementById('encriptar');

const restriccion = /[^a-z\s?]+/gm;

function encriptacion() {
   let texto = document.getElementById('parrafo').value;

   if (texto.length == 0) {
      document.getElementById('pizarra').innerHTML = "No se encontró ningún texto";
      fondoError();
      document.getElementById('botoncopiar').style.display = 'none';
   }
   else {
      let error = texto.match(restriccion);
      if (error == null) {
         let textoEncriptado = texto.replaceAll('e', 'enter').replaceAll('i', 'imes').replaceAll('o', 'ober').replaceAll('a', 'ai').replaceAll('u', 'ufat');
         document.getElementById('pizarra').innerHTML = textoEncriptado;
         cambiarFondo();
         document.getElementById('botoncopiar').style.display = 'flex';
         document.getElementById('parrafo').value = "";
      }
      else {
         imprimirError();
      }
   }
}

btnEncriptar.addEventListener('click', encriptacion);

//FUNCION DESENCRIPTAR
var btnDesencriptar = document.getElementById('desencriptar');

function desencriptacion() {
   let texto = document.getElementById('parrafo').value;

   if (texto.length == 0) {
      document.getElementById('pizarra').innerHTML = "No se encontró ningún texto";
      fondoError();
      document.getElementById('botoncopiar').style.display = 'none';
   }
   else {
      let error = texto.match(restriccion);
      if (error == null) {
         let textoDesencriptado = texto.replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ober', 'o').replaceAll('ai', 'a').replaceAll('ufat', 'u');
         document.getElementById('pizarra').innerHTML = textoDesencriptado;
         cambiarFondo();
         document.getElementById('botoncopiar').style.display = 'flex';
         document.getElementById('parrafo').value = "";
      }
      else {
         imprimirError();
      }
   }
}

btnDesencriptar.addEventListener('click', desencriptacion);

//FUNCION COPIAR
const copiador = document.getElementById('copiar');
function copiarText() {
   const textoCopiar = document.getElementById('pizarra');
   navigator.clipboard.writeText(textoCopiar.textContent);
   document.getElementById('copiar').textContent = "¡Copiado!"
   document.getElementById('copiar').style.color = "white"
   setTimeout(() => document.getElementById('copiar').textContent = "Copiar", 1000);
   setTimeout(() => document.getElementById('copiar').style.color = "black", 1000);
}
copiador.addEventListener('click', copiarText);