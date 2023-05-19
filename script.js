//FUNCION IMAGENES

var fondos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

var fondosError = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

var fondo = document.getElementById('imagen');
var indicFondo = 0;

function cambiarFondo() {
   indicFondo = Math.floor(Math.random() * fondos.length);
   if (indicFondo > fondos.length) {
      indicFondo = 0;
   }
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
      cambiarFondo();
      document.getElementById('botoncopiar').style.display = 'flex';


      console.log(texto1);
      console.log(textoEncriptado);
      
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
      cambiarFondo();
      document.getElementById('botoncopiar').style.display = 'flex';

      console.log(texto2);
      console.log(textoDesencriptado);
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


/*fondeador1.addEventListener('click', cambiarFondo);
fondeador2.addEventListener('click', cambiarFondo);*/
