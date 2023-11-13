var btn = document.querySelector("input");
var txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
  if (btn.value === "Démarrer la machine") {
    btn.value = "Arrêter la machine";
    txt.textContent = "La machine est démarrée !";
  } else {
    btn.value = "Démarrer la machine";
    txt.textContent = "La machine est arrêtée.";
  }
}

var toggle = document.getElementById("theme-toggle");

var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
document.documentElement.setAttribute('data-theme', storedTheme);

toggle.onclick = function() {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = (currentTheme === "light") ? "dark" : "light";

    document.documentElement.setAttribute('data-theme', targetTheme);
    localStorage.setItem('theme', targetTheme);

    // Masquer toutes les spans
    var allSpans = document.querySelectorAll('#theme-toggle span');
    allSpans.forEach(function(span) {
        span.classList.add('d-none');
    });

    // Afficher seulement la span correspondant au thème actuel
    var currentSpan = document.querySelector('#theme-toggle .d-block-' + targetTheme);
    currentSpan.classList.remove('d-none');
};
