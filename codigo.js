document.addEventListener("DOMContentLoaded", () => {
  // Menú Hamburguesa para Móviles
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // Cerrar menú al hacer clic en cualquier enlace
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
      }
    });
  });

  // Envío del Formulario de Contacto
  const contactForm = document.getElementById("contactForm");
  const formResponse = document.getElementById("formResponse");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value;

      // Simulación de respuesta al enviar
      formResponse.className = "form-response success";
      formResponse.textContent = `¡Gracias ${nombre}! Tu mensaje ha sido registrado exitosamente. Nos pondremos en contacto desde Jauja.`;

      contactForm.reset();

      setTimeout(() => {
        formResponse.style.display = "none";
      }, 5000);
    });
  }
});
