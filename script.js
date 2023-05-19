/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
"La letra "o" es convertida para "ober
La letra "a" es convertida para "ai"
La letra "u" es convertida para "ufat"*/
//FUNCIÓN ENCRIPTAR
var btnEncriptar = document.getElementById('encriptar');
var tildes = ["á", "é", "í", "ó", "ú", "à", "è", "ì", "ò", "ù"]


function encriptacion() {
   let texto1 = document.getElementById('parrafo').value.toLowerCase();
   let error = false;
   for (let i = 0; i < tildes.length; i++) {
      if (texto1.includes(tildes[i])) {
         error = true;
      }
   }
   if (texto1.length == 0) {
      document.getElementById('pizarra').innerHTML = "No se encontró ningún texto";
      fondoError();
      document.getElementById('botoncopiar').style.display = 'none';
   }
   
   else if (error == true) {
      document.getElementById('pizarra').innerHTML = "Solo letras minisculas y sin acentos";
      fondoError();
      document.getElementById('botoncopiar').style.display = 'none';
   }

   else {
      let textoEncriptado = texto1.replaceAll('e', 'enter');
      textoEncriptado = textoEncriptado.replaceAll('i', 'imes');
      textoEncriptado = textoEncriptado.replaceAll('o', 'ober');
      textoEncriptado = textoEncriptado.replaceAll('a', 'ai');
      textoEncriptado = textoEncriptado.replaceAll('u', 'ufat');

      document.getElementById('pizarra').innerHTML = textoEncriptado;

      document.getElementById('botoncopiar').style.display = 'flex';


      console.log(texto1);
      console.log(textoEncriptado);
      cambiarFondo();
      document.getElementById('parrafo').value = "";
      error = false;
   }
   
}

btnEncriptar.addEventListener('click', encriptacion);

//FUNCION DESENCRIPTAR
var btnDesencriptar = document.getElementById('desencriptar');

function desencriptacion() {
   var texto2 = document.getElementById('parrafo').value.toLowerCase();
   let error = false;
   for (let i = 0; i < tildes.length; i++) {
      if (texto2.includes(tildes[i])) {
         error = true;
      }
   }
   if (texto2.length == 0) {
      document.getElementById('pizarra').innerHTML = "No se encontró ningún texto";
      fondoError();
      document.getElementById('botoncopiar').style.display = 'none';
   }

   else if (error == true) {
      document.getElementById('pizarra').innerHTML = "Solo letras minisculas y sin acentos";
      fondoError();
      document.getElementById('botoncopiar').style.display = 'none';
   } 
      
   else {
      var textoDesencriptado = texto2.replaceAll('enter', 'e');
      textoDesencriptado = textoDesencriptado.replaceAll('imes', 'i');
      textoDesencriptado = textoDesencriptado.replaceAll('ober', 'o');
      textoDesencriptado = textoDesencriptado.replaceAll('ai', 'a');
      textoDesencriptado = textoDesencriptado.replaceAll('ufat', 'u');
      document.getElementById('pizarra').innerHTML = textoDesencriptado;

      document.getElementById('botoncopiar').style.display = 'flex';

      console.log(texto2);
      console.log(textoDesencriptado);
      cambiarFondo();
      document.getElementById('parrafo').value = "";
      error = false;
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
//FUNCION IMAGENES

var fondos = ["./mostrar/1.png", "./mostrar/2.png", "./mostrar/3.png", "./mostrar/4.png", "./mostrar/5.png", "./mostrar/6.png", "./mostrar/7.png", "./mostrar/8.png", "./mostrar/9.png", "./mostrar/10.png", "./mostrar/11.png", "./mostrar/12.png", "./mostrar/13.png"];

var fondosError = ["./error/1.png", "./error/2.png", "./error/3.png", "./error/4.png", "./error/5.png", "./error/6.png", "./error/7.png", "./error/8.png", "./error/9.png", "./error/10.png", "./error/11.png", "./error/12.png", "./error/13.png"]

var fondo = document.getElementById('imagen');
var indicFondo = 0;

function cambiarFondo() {
   indicFondo = Math.floor(Math.random() * fondos.length);
   if (indicFondo > fondos.length) {
      indicFondo = 0;
   }
   fondo.src = fondos[indicFondo];
}

function fondoError() {
   indicFondo = Math.floor(Math.random() * fondosError.length);
   fondo.src = fondosError[indicFondo];
}

/*fondeador1.addEventListener('click', cambiarFondo);
fondeador2.addEventListener('click', cambiarFondo);*/
