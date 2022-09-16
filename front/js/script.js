
//variable qui va recevoir le contenu HTML
const articles = document.querySelector("#items");

//fonction qui récupére les données de l'API puis les injecter dans le HTML
function recupAPI_Index() {
    fetch("http://localhost:3000/api/products")

//Test de validation si OK, récupération des données de l'API
.then(function(reponse) {
    return reponse.json(); //donne le résultat en json
    }) 

.then(function(Produits) { // ce que l'on a reçu et qui a été traité en json est appelé Produits
    //Pour chaque itération du tableau de valeurs qu'on vient de récupérer...
    //boucle for pour afficher tous les produits (Pour chaque "produit")
    for (let Produit of Produits){  
        //injecte code HTML dynamique dans notre variable
        articles.innerHTML +=   // += Addition et affectation Ajoute la valeur de droite à la valeur de la variable de gauche, 
                                //puis renvoie la nouvelle valeur de la variable.
        //récupère ou définit la syntaxe HTML décrivant les descendants de l'élément. let contents = myElement.innerHTML; 
        //? & la clé associé (=) à sa valeur dynamique ${}
        `<a href="./product.html?_id=${Produit._id}"> 
            <article>
                <img src="${Produit.imageUrl}" alt="${Produit.altTxt}">
                <h3 class="productName">${Produit.name}</h3>
                <p class="productDescription">${Produit.description}</p>
            </article>
        </a>`;
        }
    })
    .catch(function(err) { //Si Api indisponible Message d'erreur
    });
}

// Déclenche la fonction recupAPI au chargement de la page
window.addEventListener("DOMContentLoaded", function() {
    recupAPI_Index();
})

