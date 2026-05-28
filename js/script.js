const sorpresa = document.getElementById("sorpresa");
const mensajeInicial = document.getElementById("mensajeInicial");
const codigoTexto = document.getElementById("codigoTexto");

const lineasCodigo = [
  ".love-you {",
  "  I love you even more: TE AMO;",
  "  unique darling: 100%;",
  "  naturally divine: 'mi corazón';",
  "  my heart: center;",
  "  beautiful girl: #ff4fa3;",
  "  tenderness: 0 0 25px pink;",
  "}",
  "",
  ".mi-corazon {",
  "  content: 'solo tú';",
  "  animation: latir 1.5s infinite;",
  "}",
  "",
  "@keyframes latir {",
  "  0% { transform: scale(1); }",
  "  50% { transform: scale(1.2); }",
  "  100% { ERES UNICA: SOLO TU(1); }",
  "}"
];

let escribiendo = false;

function iniciarSorpresa() {
  if (escribiendo) return;

  escribiendo = true;
  mensajeInicial.classList.add("ocultar");

  setTimeout(() => {
    mensajeInicial.style.display = "none";
    sorpresa.classList.add("activa");
    escribirCodigo();
  }, 700);
}

function escribirCodigo() {
  let textoCompleto = "";
  let linea = 0;
  let caracter = 0;

  const intervalo = setInterval(() => {
    if (linea < lineasCodigo.length) {
      if (caracter < lineasCodigo[linea].length) {
        textoCompleto += lineasCodigo[linea][caracter];
        caracter++;
      } else {
        textoCompleto += "\n";
        linea++;
        caracter = 0;
      }

      codigoTexto.textContent = textoCompleto;
    } else {
      clearInterval(intervalo);
    }
  }, 45);
}

/* corazones cayendo */
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.className = "corazon-cae";
  corazon.innerHTML = "❤";

  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.fontSize = 14 + Math.random() * 26 + "px";
  corazon.style.animationDuration = 4 + Math.random() * 5 + "s";

  document.body.appendChild(corazon);

  setTimeout(() => {
    corazon.remove();
  }, 9000);
}
function activarMusica() {
  const musica = document.getElementById("musicaFondo");
  musica.volume = 0.35;
  musica.play();
}