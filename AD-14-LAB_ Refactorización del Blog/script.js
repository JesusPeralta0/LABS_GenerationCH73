

// MODO CLARO Y MODO OSCURO

const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

function applyTheme(theme) {
  html.setAttribute("data-bs-theme", theme);

  if (themeToggle) {
    const isDark = theme === "dark";

    themeToggle.textContent = isDark
      ? "☀️ Modo claro"
      : "🌙 Modo oscuro";

    themeToggle.setAttribute("aria-pressed", String(isDark));
  }
}

// Recuperar el tema guardado
const savedTheme = localStorage.getItem("blog-theme") || "light";
applyTheme(savedTheme);

// Cambiar y guardar el tema
if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    const currentTheme = html.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    applyTheme(newTheme);
    localStorage.setItem("blog-theme", newTheme);
  });
}


// FORMULARIO DE CONTACTO

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const messageAlert = document.getElementById("messageAlert");

    messageAlert.classList.remove("d-none");

    contactForm.reset();
  });
}
