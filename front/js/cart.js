
//Récupération de l'id via les paramètres de l'url
const id = new URL(window.location.href).searchParams.get("_id");

const articlePanier = document.getElementById("cart__items");
const quantitéTotal = document.getElementById("totalQuantity");
const prixTotal = document.getElementById("totalPrice");

//récupérer les données enregistrées des produits dans le localStorage
let contenuPanier = recupLocalStorage();


afficherPanier(contenuPanier);



//si le localStorage est vide
function recupLocalStorage() {
    if (produitPanier == null) {
        return [];
    } else {
        //transformer les données du LocalStorage en javascript
        return JSON.parse(produitPanier);
    }
}



function afficherPanier(panier) {
    articlePanier.innerhtml = "";

    }

    //appel API selon ID produit
    //integrer le HTML //creation balises




    //total prix 
    //validation du formulaire
    //validation prénom, nom, adresse, mail

