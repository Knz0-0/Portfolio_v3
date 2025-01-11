//overlay pour animation d'entrée
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.querySelector(".overlay");

  // Ajout de la classe fade-out
  setTimeout(() => {
    overlay.classList.add("fade-out");
  });

  // Supprimer l'overlay complètement après l'animation
  overlay.addEventListener("transitionend", () => {
    overlay.style.display = "none"; // Masquer l'élément
  });
});
