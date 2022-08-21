
////VARIABLES////

//Récupération de l'id via les paramètres de l'url
/*const id = new URL(window.location.href).searchParams.get("id");*/

const href = window.location.href;
const url = new URL(href);
const id = url.searchParams.get("id");


const articlePanier = document.getElementById("cart__items");
const quantitéTotal = document.getElementById("totalQuantity");
const prixTotal = document.getElementById("totalPrice");


////FONCTIONS////

//fonctions localStorage get/set
function sauvegardePanier(monPanier) {
    localStorage.setItem("monPanier", JSON.stringify(monPanier));
}
function Panier() {
    let monPanier = localStorage.getItem("monPanier");
    //si le localStorage est vide
    if (monPanier === null) {
        return [];
    }
    else {
        //données du LocalStorage en javascript
        return JSON.parse(monPanier);
    }
}
//Afficher le contenu du panier
function affichagePanier() {
    let monPanier = Panier();

    // Recuperer récupérer les données API de chaque article contenu dans le panier, via son id*/
    for (let p in monPanier) {
            fetch(`http://localhost:3000/api/products/${p.id}`)
            //Test de validation si OK, récupération des données de l'API
            .then(function (reponse) {
                    return reponse.json();
                })
            
            // injecte code HTML dynamique dans nos variables
            .then(function (produit) {
                articlePanier.innerHTML +=
                    `<article class="cart__item" data-id="${p.id}" data-color="${p.colors}">
                <div class="cart__item__img">
                    <img src="${produit.imageUrl}" alt="Photographie d'un canapé">
                </div>
                <div class="cart__item__content">
                    <div class="cart__item__content__description">
                        <h2>${produit.name}</h2>
                        <p>${p.colors}</p>
                        <p>${produit.price} €</p>
                    </div>
                    <div class="cart__item__content__settings">
                        <div class="cart__item__content__settings__quantity">
                            <p>Qté : </p>
                            <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${p.quantity}"/>
                        </div>
                        <div class="cart__item__content__settings__delete">
                            <p class="deleteItem">Supprimer</p>
                        </div>
                    </div>
                </div>
            </article>`;

                // calculer article total  montant total

            })
    }
}
// Déclenche la fonction recupAPI au chargement de la page
window.addEventListener("DOMContentLoaded", function() {
    affichagePanier();
})

    //appel API selon ID produit
    //integrer le HTML //creation balises




    //total prix 
    //validation du formulaire
    //validation prénom, nom, adresse, mail

