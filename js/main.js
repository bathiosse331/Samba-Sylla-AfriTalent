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
      // window au lieu document car l'evenement conserne la fenetre du navigateur 
      window.scrollTo({
        top: 0,
        behavior: "smooth" // défilement fluide
      });
    });

// intersectionObserver détecte que l'element avec l'identifiant tel qui apparait pour
// lui attribuer certains propriete comme ici incrementation jusqu'a valeur finale avec
// l'objet isIntersecting
let observer = new IntersectionObserver((entree)=>{
  entree.forEach((entre)=>{
    if(entre.isIntersecting){
      // la declaration de la valeur finale
      let nombre = 3000;
      // la declaration de la valeur de depart
      let nombree = 0;
      let compteur = document.getElementById("compteur");
      let i = setInterval(()=>{
        compteur.innerText = nombree;
        nombree++;
        if(nombree === nombre + 1){
          clearInterval(i)
        }
      },1); 
      observer.unobserve(entre.target)
    }
  })
  
});

let target = document.querySelector(".parent");
observer.observe(target);

let observe = new IntersectionObserver((entries)=>{
  entries.forEach((entrie)=>{
    if(entrie.isIntersecting){
      let nombr = 1500;
      let nomb = 0;
      let compte = document.getElementById("compte");
      let u = setInterval(()=>{
        compte.innerText = nomb;
        nomb++;
        if(nomb === nombr + 1){
          clearInterval(u)
        }
      },1);
      observe.unobserve(entrie.target)
    }
  })
  
});

let targe = document.querySelector(".pere");
observe.observe(targe);

let observ = new IntersectionObserver((entri)=>{
  entri.forEach((entriee)=>{
    if(entriee.isIntersecting){
      let no = 800;
      let nom = 0;
      let compt = document.getElementById("compt");
      let v = setInterval(()=>{
        compt.innerText = nom;
        nom++;
        if(nom === no + 1){
          clearInterval(v)
        }
      },1);
      observ.unobserve(entriee.target)
    }
  })
  
});

let targ = document.querySelector(".papa");
observ.observe(targ);

// animation fade-in
// document.addEventListener("DOMContentLoaded", () => {
//   const elements = document.querySelectorAll(".fade-in");

//   const obser = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         entry.target.classList.add("visible");
//         // Optionnel : arrêter d’observer après apparition
//         obser.unobserve(entry.target);
//       }
//     });
//   }, {
//     threshold: 0.2 // déclenche quand 20% de l’élément est visible
//   });

//   elements.forEach(el => obser.observe(el));
// });




document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // On calcule un délai en fonction de la position de l’élément
        const index = Array.from(elements).indexOf(entry.target);
        entry.target.style.transitionDelay = `${index * 0.3}s`; // 0.3s entre chaque
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  elements.forEach(el => observer.observe(el));
});


