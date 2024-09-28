//overlay pour animation d'entrée
document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector(".overlay");
    
    // Ajout de la classe fade-out après un certain temps
    setTimeout(() => {
        overlay.classList.add("fade-out");
    }); // 1 seconde d'attente avant de commencer l'animation

    // Supprimer l'overlay complètement après l'animation
    overlay.addEventListener("transitionend", () => {
        overlay.style.display = "none"; // Masquer l'élément
    });
});