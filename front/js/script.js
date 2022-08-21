
//variable qui va recevoir le contenu HTML
const Articles = document.querySelector("#items");

//fonction qui récupére les données de l'API puis les injecter dans le HTML
function recupAPI_Index() {
    fetch("http://localhost:3000/api/products")

//Test de validation si OK, récupération des données de l'API
.then(function(reponse) {
    return reponse.json(); 
    }) 

.then(function(Produits) { 
    //Pour chaque itération du tableau de valeurs qu'on vient de récupérer...
    //boucle for pour afficher tous les produits
    for (let Produit of Produits){  
        //injecte code HTML dynamique dans notre variable
        Articles.innerHTML +=     
        //récupère ou définit la syntaxe HTML décrivant les descendants de l'élément. let contents = myElement.innerHTML;
        `<a href="./product.html?_id=${Produit._id}"> 
            <article>
                <img src="${Produit.imageUrl}" alt="${Produit.altTxt}">
                <h3 class="productName">${Produit.name}</h3>
                <p class="productDescription">${Produit.description}</p>
            </article>
        </a>`;
        }
    }
);
}

// Déclenche la fonction recupAPI au chargement de la page
window.addEventListener("DOMContentLoaded", function() {
    recupAPI_Index();
})
