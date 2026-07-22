/* ==========================
   ELDORADO
   JavaScript
========================== */


/* ===== MENU MOBILE ===== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
    menuBtn.addEventListener("click",()=>{
        navLinks.classList.toggle("active");
    });
}



/* ===== PANIER ===== */

let panier = [];

let total = 0;


function ajouterAuPanier(nom, prix){

    panier.push({
        nom: nom,
        prix: prix
    });

    total += prix;

    afficherPanier();

}



function afficherPanier(){

    const liste = document.getElementById("liste-panier");
    const totalHTML = document.getElementById("total");


    if(liste){

        liste.innerHTML="";


        panier.forEach((produit)=>{

            let li = document.createElement("li");

            li.textContent =
            produit.nom + " - " + produit.prix + " FCFA";


            liste.appendChild(li);

        });

    }


    if(totalHTML){

        totalHTML.textContent = total;

    }

}



/* ===== RESERVATION ===== */

const formReservation =
document.getElementById("reservation-form");


if(formReservation){

formReservation.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert(
    "Votre réservation a été enregistrée. Merci de choisir Eldorado !"
    );

    formReservation.reset();

});

}