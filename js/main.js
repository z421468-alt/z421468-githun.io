// =========================================================
// main.js — Modo Día/Noche Total para todo el sitio web 🚗
// Proyecto: Ventas de Automóviles
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggleButton = document.querySelector(".theme-toggle");

  // Colores para modo Día
  const temaDia = {
    fondo: "#f8f9fa",
    texto: "#222",
    header: "#ffffff",
    footer: "#e9ecef",
    tarjetas: "#ffffff",
    botones: "#007bff",
    botonesTexto: "#ffffff"
  };

  // Colores para modo Noche
  const temaNoche = {
    fondo: "#121212",
    texto: "#f1f1f1",
    header: "#1c1c1c",
    footer: "#181818",
    tarjetas: "#1f1f1f",
    botones: "#ff9800",
    botonesTexto: "#000000"
  };

  // Verificar si hay un modo guardado en el navegador
  let modoActual = localStorage.getItem("modo") || "dia";
  aplicarTema(modoActual);

  // Evento de clic en el icono de engranaje / sol / luna
  toggleButton.addEventListener("click", () => {
    modoActual = modoActual === "dia" ? "noche" : "dia";
    aplicarTema(modoActual);
    localStorage.setItem("modo", modoActual);
  });

  // Función para aplicar los colores del tema a todo el sitio
  function aplicarTema(modo) {
    const colores = modo === "dia" ? temaDia : temaNoche;

    // Transición suave en todo el sitio
    body.style.transition = "background-color 0.8s ease, color 0.8s ease";
    body.style.backgroundColor = colores.fondo;
    body.style.color = colores.texto;

    // Cambiar encabezado y pie de página
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    if (header) header.style.backgroundColor = colores.header;
    if (footer) footer.style.backgroundColor = colores.footer;

    // Cambiar tarjetas, secciones, productos, galería
    const elementos = document.querySelectorAll(
      ".card, .producto, .vehiculo, .galeria-item, .contenedor, .seccion, section, .info-box, .cliente"
    );
    elementos.forEach(el => {
      el.style.transition = "background-color 0.8s ease, color 0.8s ease, box-shadow 0.8s ease";
      el.style.backgroundColor = colores.tarjetas;
      el.style.color = colores.texto;
      el.style.boxShadow = modo === "dia"
        ? "0 4px 10px rgba(0,0,0,0.1)"
        : "0 4px 10px rgba(255,255,255,0.1)";
    });

    // Cambiar color de botones
    const botones = document.querySelectorAll("button, .btn, input[type='submit']");
    botones.forEach(btn => {
      btn.style.transition = "background-color 0.6s ease, color 0.6s ease, border 0.6s ease";
      btn.style.backgroundColor = colores.botones;
      btn.style.color = colores.botonesTexto;
      btn.style.border = "none";
    });

    // Cambiar color de enlaces
    const enlaces = document.querySelectorAll("a");
    enlaces.forEach(a => {
      a.style.transition = "color 0.6s ease";
      a.style.color = modo === "dia" ? "#007bff" : "#ffcc00";
    });

    // Cambiar color de iconos
    const iconos = document.querySelectorAll("i, .icon, .theme-toggle");
    iconos.forEach(icon => {
      icon.style.transition = "color 0.6s ease, transform 0.4s ease";
      icon.style.color = modo === "dia" ? "#333" : "#ffcc00";
    });

    // Cambiar imagen del fondo si deseas personalizarlo
    if (modo === "dia") {
      toggleButton.textContent = "🌙";
    } else {
      toggleButton.textContent = "🌞";
    }
  }

  // ============================
  // Ajuste automático según la hora
  // ============================
  const hora = new Date().getHours();
  if (!localStorage.getItem("modo")) {
    if (hora >= 19 || hora < 6) {
      aplicarTema("noche");
      localStorage.setItem("modo", "noche");
    } else {
      aplicarTema("dia");
      localStorage.setItem("modo", "dia");
    }
  }
});
