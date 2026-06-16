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
      // scrollto est declenche lors du click pour remonter en haut
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
if(target){

  observer.observe(target);
}

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
if(targe){

  observe.observe(targe);
}

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
if(targ){

  observ.observe(targ);
}




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

// validation form

// email
// function emailValide(email){
// // return/^[a-za-z0-9._%+-]+@[a-za-z0-9.-]+\.[a-za-Z]{2,}$/.test(email);
// }
function validerEmail(){
  const champEmail = document.getElementById("email");
  if(!champEmail.value.trim()){
    afficherErreur("champEmail","veuillez saisir votre adresse email");
  return false
  };
  if(!emailValide.value.trim()){
    afficherErreur(champEmail,"format invalide ")
  }
}
const from = document.getElementById("form")
if (from){
  from.addEventListener("submit",(e) =>{
    const msg = document.getElementById("success");
    msg.classList.add("show");
  });
  setTimeout(()=>{
    from.reset();
    msg.classList.remove("show");
  }, 3000);
}


let btne = document.querySelectorAll(".pre")
let carte = document.querySelectorAll(".pro")
btne.forEach((bt) =>{
  bt.addEventListener("click",function(){
    let filtre = this.getAttribute("data-categorie")
    carte.forEach((cart) =>{
      let cat = cart.getAttribute("data-target")
      if (filtre === "all"){
        cart.style.display = "";
      }else if(filtre === cat){
        cart.style.display = "";
      }else{
        cart.style.display = "none";
      }
    });
  });
});


// // email
// function emailValide(email) {
//     // Décommenté et corrigé : valide le format texte de l'email
//     return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
// }

// function validereEmail() {
//     const champEmail = document.getElementById("email");
    
//     // 1. Vérification si le champ est vide
//     if (!champEmail.value.trim()) {
//         afficherErreur("!champEmail", "veuillez saisir votre adresse email");
//         return false;
//     }
    
//     // 2. Vérification du format (on passe la valeur du champ à la fonction)
//     if (!emailValide(champEmail.value.trim())) {
//         afficherErreur("champEmail", "format invalide ");
//         return false; // Ajouté pour bloquer si le format est incorrect
//     }

//     return true; // L'email est valide
// }

// const from = document.getElementById("form");
// if (from) {
//     from.addEventListener("submit", (e) => {
//         // Empêche le rechargement de la page pour traiter le JS
//         e.preventDefault(); 

//         // On ne traite la suite que si l'email est valide
//         if (validereEmail()) {
//             const msg = document.getElementById("success");
//             msg.classList.add("show");

//             // Le setTimeout doit être ICI, à l'intérieur du submit
//             setTimeout(() => {
//                 from.reset();
//                 msg.classList.remove("show");
//             }, 3000);
//         }
//     });
//   }