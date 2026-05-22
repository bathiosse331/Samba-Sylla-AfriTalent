const btn = document.getElementById("toggleBtn");

    btn.addEventListener("click", () => {
      document.body.classList.toggle("dark");

      if (document.body.classList.contains("dark")) {
        btn.textContent = " Mode sombre";
      } else {
        btn.textContent = " Mode clair";
      }
    });


    // Récupérer l'élément de la navbar
let navbar = document.getElementById("navbar");

// Écouter l'événement de scroll sur la fenêtre
window.addEventListener("scroll", () => {
  // Si on a défilé de plus de 50 pixels
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    // Si on est tout en haut
    navbar.classList.remove("scrolled");
  }
});


 const btnTop = document.getElementById("btnTop");

    // Afficher ou cacher le bouton selon le scroll
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        btnTop.style.display = "block";
      } else {
        // display: none  le bouton est invisible au départ.
        btnTop.style.display = "none";
      }
    });

    // Action du bouton : remonter en haut
    btnTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth" // défilement fluide
      });
    });