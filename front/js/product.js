
////VARIABLES////

//Récupération de l'id via les paramètres de l'url
const id = new URL(window.location.href).searchParams.get("_id");

//Variables qui vont recevoir le contenu HTML
const image = document.querySelector("div.item__img");
const titre = document.getElementById("title");
const prix = document.getElementById("price");
const description = document.getElementById("description");

// Événement et Variable qui manipule la couleur
let Couleurs;
const selectionCouleur = document.getElementById("colors");
selectionCouleur.addEventListener("change", function(event) {
    Couleurs = event.target.value;   /* ligne 68 product.html */
})

// Événement et Variable qui manipule la quantité
let choixQuantité;
const quantity = document.getElementById("quantity");
quantity.addEventListener("change", function(event) {
    choixQuantité = parseInt(event.target.value); /* ligne 76 product.html */
    /* parseInt() = analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée*/ 
})

//bouton qui va ajouter les données dans localStorage
const ajoutProduitBtn = document.getElementById("addToCart"); /*ligne 81 product.html */



////FONCTIONS////

/*Recuperation données API*/

//Récuperer les données de l'API puis les injecter dans le HTML
function recupAPI_Produits() {
    fetch(`http://localhost:3000/api/products/${id}`)
    //Test de validation si OK, récupération des données de l'API
    .then(function(reponse) {
        return reponse.json(); 
        }) 

    //injecte code HTML dynamique dans notre variable
    .then(function(Produit) { 
        image.innerHTML = `<img src="${Produit.imageUrl}"/>`;
        titre.textContent = Produit.name;
        prix.textContent = Produit.price;
        description.textContent = Produit.description;
        quantity.Produit = 0;
        for (let each of Produit.colors) {
            selectionCouleur.innerHTML += `<option Produit=${each}>${each}</option>`;
        }
    })
}

// Déclenche la fonction recupAPI au chargement de la page
window.addEventListener("DOMContentLoaded", function() {
    recupAPI_Produits();
})



/*LocalStorage*/

// Enregistrer le panier dans le localStorage
function enregistrerPanier(panier) {
    localStorage.setItem("panier", JSON.stringify(panier));
}
// Recuperer les données du localStorage
function ajoutProduitPanier() {
    let panier = localStorage.getItem("panier");
    // verifier le cas où il y a deja des donnees enregistrees
    if (panier == null) {
        return [];
        } 
        //transformer les donnees du LocalStorage en javascript
        else {
        return JSON.parse(panier);
        }
}

/*Panier*/

//ajouter un produit 
function ajoutProduit() {
    // Affilier un objet article contenant les informations qui nous intéressent*/
    let produit = {
        id: id,
        colors: Couleurs,
        quantity: choixQuantité
    };
    //récupèrer le panier
    let panier = ajoutProduitPanier();
    // Rechercher dans le panier si l'article y est déjà présent
    let detecterProduit = panier.find(p => p.id == produit.id);
    let detecterCouleur = panier.find(p => p.colors == produit.colors);
        // Si l'article n'est pas présent dans le panier, il est ajouté
        if (detecterProduit == undefined) {
            produit.quantity = choixQuantité;
            panier.push(produit); 
        }
        // Si l'article est présent, mais d'une couleur différente, il est ajouté
        else {
            if (detecterCouleur == undefined) {
                produit.quantity = choixQuantité;
                panier.push(produit);
            }
            // Si l'article est présent (même type, même couleur), on augmente dans le panier la quantité
            else {
                detecterProduit.quantity += choixQuantité;
            }
            }

//enregistrer les modifications dans le localStorage
enregistrerPanier(panier);
}




/* Confirmation et Validation */
//Déclenche la fonction ajoutProduit en cliquant sur le BTN
ajoutProduitBtn.addEventListener("click",function(event) {

        //verifier si couleur choisie
        if (Couleurs == undefined) {
            event.preventDefault();
            alert("Veuillez sélectionner une couleur.");
        }
        //verifier quantité
        if (
            choixQuantité == undefined) {
            event.preventDefault();
            alert("Veuillez sélectionner une quantité entre 1 et 100.");
        }
        else {
            ajoutProduit();
            alert("Article(s) ajouté(s) au panier");
        }
    });







//Test Confirmation et validation

/* 
    // element de validation
    let valide = true;
    //verifier si couleur choisie
    if (
        Produit.color == "") 
        {
        valide = false;
        alert("Veuillez sélectionner une couleur.");
    }
    //verifier quantité
    if (
        choixQuantité > 100 ||
        choixQuantité < 1) 
        {
        valide = false; 
        alert("Veuillez sélectionner une quantité entre 1 et 100.");
    }
    if (valide) {
        ajoutProduit(Produit);
    }
});
*/


/*
//fenetre de confirmation
function fenetreConfirmation() {
    if (
        window.confirm(`Merci! Le produit "${document.getElementById("title").textContent}", 
        de couleur : ${document.getElementById("colors").Produit} pour une quantité de : ${document.getElementById("quantity").Produit}, 
        a bien été ajouté au panier. 
        Appuyez sur "OK" pour consulter le panier ou sur "annuler" pour continuer vos achats.`)
        ) {
        window.location.href = "panier.html";
        } else {
        window.location;
        }
}
*/







