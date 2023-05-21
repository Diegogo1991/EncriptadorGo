//FUNCION IMAGENES

var fondos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

var fondosError = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

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

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
"La letra "o" es convertida para "ober
La letra "a" es convertida para "ai"
La letra "u" es convertida para "ufat"*/

function imprimirError() {
   document.getElementById('pizarra').innerHTML = "¡Ups, no se aceptan acentos o caracteres especiales!";
   fondoError();
   document.getElementById('botoncopiar').style.display = 'none';
}

//FUNCIÓN ENCRIPTAR
var btnEncriptar = document.getElementById('encriptar');

const condiciones = {
   minusculas: /[^a-z\s]+/g, // Todo menos Letras minusculas y espacios
   mayusculas: /[^A-ZÀ-ÿ]+[^.,:;?]+/g, // Todo menos mayusculas
   sinespacios: /[^a-z]+/g, // Todo menos minisculas
   acentos: /[^à-ÿÀ-ÿ]+/g, // Acentos
   prueba2: /[^a-z\s.,:;?]+/gm, // Incluyendo simbolos ortografia
   prueba: /[^a-z\s?]+/gm, // Todo menos letras minisculas, espacios opcionales
   letras: /[a-z\s]+/g //Solo de la a - z
}

function encriptacion() {
   let texto1 = document.getElementById('parrafo').value.toLowerCase();
   let error = condiciones.prueba2.test(texto1);
   if (texto1.length == 0) {
      document.getElementById('pizarra').innerHTML = "No se encontró ningún texto";
      fondoError();
      document.getElementById('botoncopiar').style.display = 'none';
   }
   else if (texto1.length != 0) {
      if (error === false) {
         if (condiciones.prueba.test(texto1) === false) {
            let textoEncriptado = texto1.replaceAll('e', 'enter');
            textoEncriptado = textoEncriptado.replaceAll('i', 'imes');
            textoEncriptado = textoEncriptado.replaceAll('o', 'ober');
            textoEncriptado = textoEncriptado.replaceAll('a', 'ai');
            textoEncriptado = textoEncriptado.replaceAll('u', 'ufat');
            document.getElementById('pizarra').innerHTML = textoEncriptado;
            cambiarFondo();
            document.getElementById('botoncopiar').style.display = 'flex';
            document.getElementById('parrafo').value = "";
         }
         else if (condiciones.prueba2.test(texto1) === false) {
            let textoEncriptado = texto1.replaceAll('e', 'enter');
            textoEncriptado = textoEncriptado.replaceAll('i', 'imes');
            textoEncriptado = textoEncriptado.replaceAll('o', 'ober');
            textoEncriptado = textoEncriptado.replaceAll('a', 'ai');
            textoEncriptado = textoEncriptado.replaceAll('u', 'ufat');
            document.getElementById('pizarra').innerHTML = textoEncriptado;
            cambiarFondo();
            document.getElementById('botoncopiar').style.display = 'flex';
            document.getElementById('parrafo').value = "";
         }
         else {
            imprimirError();
         }
      }
      else if (error === true) {
         imprimirError();
      }
   }
}

btnEncriptar.addEventListener('click', encriptacion);

//FUNCION DESENCRIPTAR
var btnDesencriptar = document.getElementById('desencriptar');

function desencriptacion() {
   let texto2 = document.getElementById('parrafo').value.toLowerCase();
   let error = condiciones.prueba2.test(texto2);
   if (texto2.length == 0) {
      document.getElementById('pizarra').innerHTML = "No se encontró ningún texto";
      fondoError();
      document.getElementById('botoncopiar').style.display = 'none';
   }
   else if (texto2.length != 0) {
      if (error === false) {
         if (condiciones.prueba.test(texto2) === false) {
            let textoDesencriptado = texto2.replaceAll('enter', 'e');
            textoDesencriptado = textoDesencriptado.replaceAll('imes', 'i');
            textoDesencriptado = textoDesencriptado.replaceAll('ober', 'o');
            textoDesencriptado = textoDesencriptado.replaceAll('ai', 'a');
            textoDesencriptado = textoDesencriptado.replaceAll('ufat', 'u');
            document.getElementById('pizarra').innerHTML = textoDesencriptado;
            cambiarFondo();
            document.getElementById('botoncopiar').style.display = 'flex';
            document.getElementById('parrafo').value = "";
         }
         else if (condiciones.prueba2.test(texto2) === false) {
            let textoDesencriptado = texto2.replaceAll('enter', 'e');
            textoDesencriptado = textoDesencriptado.replaceAll('imes', 'i');
            textoDesencriptado = textoDesencriptado.replaceAll('ober', 'o');
            textoDesencriptado = textoDesencriptado.replaceAll('ai', 'a');
            textoDesencriptado = textoDesencriptado.replaceAll('ufat', 'u');
            document.getElementById('pizarra').innerHTML = textoDesencriptado;
            cambiarFondo();
            document.getElementById('botoncopiar').style.display = 'flex';
            document.getElementById('parrafo').value = "";
         }
         else {
            imprimirError();
         }
      }
      else if (error === true) {
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