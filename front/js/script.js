//récupérer les données de l'API puis les injecter dans le HTML
fetch('http://localhost:3000/api/products') 
//Test de validation si OK, récupération des données de l'API
.then(function(response) {
    return response.json(); 
    }) 


.then(function(Produits) { //appeler un produits
    /*Pour chaque itération du tableau de valeurs qu'on vient de récupérer...*/
    let myProduit = document.querySelector("#items");
    //boucle for pour afficher tous les produits
    for (let Produit of Produits){  
        /*injecte code HTML dynamique dans notre variable*/
        myProduit.innerHTML +=     
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


