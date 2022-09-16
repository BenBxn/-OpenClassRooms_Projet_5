
////VARIABLES CONSTANTES////

//Récupération de l'id via les paramètres de l'url
/*const id = new URL(window.location.href).searchParams.get("id");*/
//Cette ligne crée :
//créer un nom de variable pour récupérer l'URL de la page
const href = window.location.href;
const url = new URL(href);

//créer une variable pour définir la valeur du paramètre id situé dans l'URL
const id = url.searchParams.get("id");

//Variables qui vont recevoir le contenu HTML
const articlePanier = document.getElementById("cart__items");
const quantitéTotal = document.getElementById("totalQuantity");
const prixTotal = document.getElementById("totalPrice");


////FONCTIONS////

//fonctions localStorage 
//Enregistrer le panier dans le localStorage en chaine de caractere
function enregistrerPanier(panier) {
    localStorage.setItem("panier", JSON.stringify(panier));
}
// Recuperer les données du localStorage
function localSToragePanier() {
    let panier = localStorage.getItem("panier");
    //si le localStorage est vide /* === égalité stricte */
    if (panier === null) {
        return [];
    }
    else {
    //données du LocalStorage en javascript
        return JSON.parse(panier);
    }
}


//Afficher le contenu du panier
function affichagePanier() {
    let panier = localSToragePanier();
    let sommeProduit = 0; //variable en tant que nombre
    let sommePrix = 0; //variable en tant que nombre

    // Recuperer récupérer les données API de chaque article contenu dans le panier, via son id
    for (let p in panier) {
            fetch(`http://localhost:3000/api/products/${panier[p].id}`)
            //Test de validation si OK, récupération des données de l'API
            .then(function (reponse) {
                    return reponse.json();
                })
            
            // injecte code HTML dynamique dans nos variables
            .then(function (produit) {
                articlePanier.innerHTML += 
                `<article class="cart__item" data-id="${panier[p].id}" data-color="${panier[p].colors}">
                    <div class="cart__item__img">
                        <img src="${produit.imageUrl}" alt="Photographie d'un canapé">
                    </div>
                    <div class="cart__item__content">
                        <div class="cart__item__content__description">
                            <h2>${produit.name}</h2>
                            <p>${panier[p].colors}</p>
                            <p>${produit.price} €</p>
                        </div>
                        <div class="cart__item__content__settings">
                            <div class="cart__item__content__settings__quantity">
                                <p>Qté : </p>
                                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${panier[p].quantity}"/>
                            </div>
                            <div class="cart__item__content__settings__delete">
                                <p class="deleteItem">Supprimer</p>
                            </div>
                        </div>
                    </div>
                </article>`;
                
                /*console.log(panier[p]);*/
                // calculer article total & montant total 
                sommeProduit += JSON.parse(panier[p].quantity); 
                quantitéTotal.textContent = (sommeProduit);
                sommePrix += JSON.parse(panier[p].quantity * produit.price);
                prixTotal.textContent = (sommePrix);
            })
    }
}

/*
// Déclenche la fonction affichagePanier au chargement de la page
window.addEventListener("DOMContentLoaded", function() {
    affichagePanier();
}) 
*/

// fonction modifier la quantité d'article
const article = document.getElementsByClassName("cart__item");
const changementQuantité = document.getElementsByClassName("itemQuantity");


function modifierQuantité() {
    for (let i = 0; i < changementQuantité.length; i++) { //La propriété length d'un tableau indique le nombre d'éléments qu'il contient 
        changementQuantité[i].addEventListener("change", function (event) {
            const articleId = article[i].dataset.id;
            const articleCouleur = article[i].dataset.color;
            const articleQuantité = parseInt(event.target.value,10); 
            /* parseInt() = analyse une chaîne de caractère fournie en argument et renvoie un entier exprimé dans une base donnée*/
            function ajoutProduit() {
                // Affilier un objet "produit" contenant les informations qui nous intéressent
                let produit = {
                    id: articleId,
                    colors: articleCouleur,
                    quantity: articleQuantité
                };
                //Recuperer le panier
                let panier = localSToragePanier();
                //Rechercher dans le panier si l'article y est 
                let rechercheProduit = panier.findIndex(p => p.id == produit.id);
                panier[rechercheProduit].quantity = articleQuantité;
                //Enregistrer 
                enregistrerPanier(panier);
                /* console.log(panier);*/
            }
            ajoutProduit();
            //Actualiser
            window.location.reload();
        })
    }
}

// fonction supprimer un article 
const retirerArticle = document.getElementsByClassName("deleteItem"); 
function supprimerArticle() {
    for (let i = 0; i < retirerArticle.length; i++) {
        //Déclenche la fonction supprimerArticle en cliquant sur supprimer
        retirerArticle[i].addEventListener("click", function () {
            function supprimerProduit(){

                //Recuperer le panier
                let panier = localSToragePanier();
                //Modifier le panier
                panier.splice(i, 1); /*splice() modifie le contenu d'un tableau en retirant des éléments et/ou en ajoutant de nouveaux éléments*/
                //Enregistrer 
                enregistrerPanier(panier);
            }

            supprimerProduit();
            //Actualiser
            window.location.reload();
        })
    }
}


// Déclenche la fonction affichagePanier au chargement de la page
window.addEventListener("DOMContentLoaded", function() {
    
    affichagePanier();

    setTimeout(function() {
        modifierQuantité()
    }, 200);

    setTimeout(function() {
        supprimerArticle()
    }, 200);

    
}) 


/*Formulaire*/

//constantes formulaire
const inputFirstName = document.getElementById("firstName");
const inputLastName = document.getElementById("lastName");
const inputAddress = document.getElementById("address");
const inputEmail = document.getElementById("email");
const inputCity = document.getElementById("city");

let panier = localSToragePanier();


//valider prénom / nom / adresse / email
//construire expression rationnelle
//^: debut séquence / $: fin séquence /
inputFirstName.addEventListener("change", function () {
    inputValide(this, "^[a-zA-ZÀ-ÿ '-]{2,}$");
});

inputLastName.addEventListener("change", function () {
    inputValide(this, "^[a-zA-ZÀ-ÿ '-]{2,}$");
});

inputAddress.addEventListener("change", function () {
    inputValide(this, "^[a-zA-ZÀ-ÿ0-9 ,.'-]{2,}$");
});

inputEmail.addEventListener("change", function () {
    inputValide(this, "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$");
});

inputCity.addEventListener("change", function () {
    inputValide(this, "^[a-zA-ZÀ-ÿ ,.'-]{2,}$");
});

function inputValide(champSaisie, regExp) {
    //creer regexp pour valider
    const saisieRegExp = new RegExp(regExp, "g"); //Recherche globale : Le flag "g" indique que l'expression rationnelle recherchera toutes les correspondances possibles d'une chaîne de caractères.
    //valider regexp
    const saisieValide = saisieRegExp.test(champSaisie.value); //vérifie s'il y a une correspondance entre la chaine "champSaisie" et l'expression rationnelle "saisieRegExp". 
    const messageErreurs = champSaisie.nextElementSibling; //Référence à l'élément frère suivant ou null s'il n'existe pas.
    if (saisieValide) {
        messageErreurs.textContent = "valide";
        return true;
    } 
    else {
        messageErreurs.textContent = "format non-valide";
        return false;
    }
}



//confirmer commande et numero

//bouton qui permet de requêter l'API et de récupérer le numéro de commande
const commande = document.getElementById("order");

commande.addEventListener("click", function (event) {
//Recuperer le panier
let panier = localSToragePanier();    
    if ( //si formulaire valide
        inputValide(inputFirstName, inputLastName, inputCity, inputAddress, inputEmail)
    ) {
        if (panier.length == 0) { // si Panier vide > alerte 
        event.preventDefault();
        alert("Attention, votre panier est vide ! ");
        } else {        // sinon function enregistrerCommande > alerte
            enregistrerCommande();
            event.preventDefault();
            alert("Votre commande a bien été prise en compte.");
            }
        } else { // sinon (pas d'article ou article mais "inputvalide" invalide) > alerte
            event.preventDefault();
            alert("Merci de bien vérifier votre formulaire avant de commander");
            }
});

function preparationCommande() {    //backend controllers product.js ligne 49 à 57 erreur 400
    //objet donneesUtilisateur avec donées saisies 
    const donneesUtilisateur = {
        firstName: inputFirstName.value,
        lastName: inputLastName.value,
        address: inputAddress.value,
        email: inputEmail.value,
        city: inputCity.value,
    };
    console.log(donneesUtilisateur)

    //recuperer données du panier
    //tableau array
    const produitsId = [];
    for (let i = 0; i < panier.length; i++) {
        produitsId.push(panier[i].id);
    }
    return {
    products: produitsId,
    contact: donneesUtilisateur,
    };
}

//envoyer les donnees du formulaire et les traiter
function enregistrerCommande() {
    const confirmationCommande = preparationCommande(); // produitsId + donneesUtilisateur

    //effectuer une requête POST sur l'API 
    fetch("http://localhost:3000/api/products/order", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json',
    },
    body: JSON.stringify(confirmationCommande),// valeur à convertir en chaîne JSON
    })
    .then(function (reponse) {
        if (reponse.ok) {
            return reponse.json();
        }
    })
    .then(function (Validation) {
        //vider le localStorage
        localStorage.clear();
        //diriger sur la page confirmation et inject numéro de commande
        window.location.replace(`confirmation.html?order=${Validation.orderId}`); //backend controllers product.js "orderId" ligne 80 à 85
    })
    .catch((error) => { //Si API indisponible
        alert(
        "Le serveur ne répond pas. Merci de revenir ultérieurement."
        );
    });
}