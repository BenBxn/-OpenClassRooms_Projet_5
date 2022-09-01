
////VARIABLES CONSTANTES////

//Récupération de l'id via les paramètres de l'url //créer un nom de variable pour récupérer l'URL de la page
/*let params = new URLSearchParams(window.location.search);
let productId = params.get("id");*/
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
    //Recuperer la valeur de la cible de l'évenement dans "couleurs"
    Couleurs = event.target.value;   /* ligne 68 product.html */
})

// Événement et Variable qui manipule la quantité
let choixQuantité;
const quantity = document.getElementById("quantity");
quantity.addEventListener("change", function(event) {
     //Recuperer la valeur de la cible de l'évenement dans "choixQuantité"
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
        return reponse.json(); //donne le résultat en json
        }) 

    //injecte code HTML dynamique dans notre variable
    .then(function(Produit) { 
        image.innerHTML = `<img src="${Produit.imageUrl}"/>`;
        titre.textContent = Produit.name;
        prix.textContent = Produit.price;
        description.textContent = Produit.description;
        quantity.Produit = 0;
        for (let each of Produit.colors) {
            selectionCouleur.innerHTML += `<option Produit=${each}>${each}</option>`; // += Addition et affectation
        }
    })
    .catch(function(err) { //Si Api indisponible Message d'erreur
    });
}

// Déclenche la fonction recupAPI au chargement de la page
window.addEventListener("DOMContentLoaded", function() {
    recupAPI_Produits();
})



/*LocalStorage*/

// Enregistrer le panier dans le localStorage en chaine de caractere
function enregistrerPanier(panier) {
    // On convertit l'objet en une chaîne JSON
    // et on enregistre cette valeur avec le nom 'panier'
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
    // Affilier un objet "produit" contenant les informations (paires clés-valeur)
    let produit = {
        id: id,
        colors: Couleurs, /*ligne 16*/
        quantity: choixQuantité /*ligne 24*/ 
    };
    //récupèrer le panier
    let panier = ajoutProduitPanier();
    // Rechercher dans le panier si l'article y est déjà présent
    let detecterProduit = panier.find(p => p.id == produit.id);
    let detecterCouleur = panier.find(p => p.colors == produit.colors);
        // Si l'article n'est pas présent dans le panier, il est ajouté
        if (detecterProduit == undefined) {
            produit.quantity = choixQuantité; // x contient maintenant la même valeur que y
            panier.push(produit); // ajoute "produit" à la fin de notre tableau panier
        }
        // Si l'article est présent, mais d'une couleur différente, il est ajouté
        else {
            if (detecterCouleur == undefined) {
                produit.quantity = choixQuantité; // x contient maintenant la même valeur que y
                panier.push(produit); // ajoute "produit" à la fin de notre tableau panier
            }
            // Si l'article est présent (même type, même couleur), on augmente dans le panier la quantité
            else {
                detecterProduit.quantity += choixQuantité; // += Addition et affectation Ajoute la valeur de droite à la valeur de la variable de gauche, puis renvoie la nouvelle valeur de la variable
            }
            }

//enregistrer les modifications dans le localStorage
enregistrerPanier(panier);
}




/* Confirmation et Validation */
//Déclenche la fonction ajoutProduit en cliquant sur le BTN
ajoutProduitBtn.addEventListener("click",function(event) {

        //verifier si couleur choisie
        if (Couleurs == undefined) { //Si couleur non renseignée > alerte
            event.preventDefault();
            alert("Veuillez sélectionner une couleur.");
        }
        //verifier quantité
        if (
            choixQuantité == undefined) { //Si quantité non renseignée > alerte
            event.preventDefault();
            alert("Veuillez sélectionner une quantité.");
        }
        else {
            ajoutProduit(); //sinon function ajoutProduit
            alert("Article(s) ajouté(s) au panier");
        }
    });

