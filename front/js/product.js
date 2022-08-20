

//Récupération de l'id via les paramètres de l'url
const id = new URL(window.location.href).searchParams.get("_id");


//bouton qui va ajouter les données dans localStorage
const ajoutPanierBtn = document.getElementById("addToCart"); /*ligne 81 */





//récupérer les données de l'API puis les injecter dans le HTML
//importer les données de l'article qui correspond à l'id présent dans l'url
fetch(`http://localhost:3000/api/products/${id}`)
//Test de validation si OK, récupération des données de l'API
.then(function (response) {
    return response.json()
    })

.then(function(Produit) { 

    document.getElementsByClassName("item__img")[0].innerHTML = `<img src="${Produit.imageUrl}" alt="${Produit.altTxt}">`; /*??*/
    
    document.getElementById("title").innerHTML = Produit.name;
    document.getElementById("price").innerHTML = Produit.price;
    document.getElementById("description").innerHTML = Produit.description;

    //Choix couleurs
    const productColors = document.getElementById("colors");
    for (const color of Produit.colors) {
    const itemColor = document.createElement("option");
    productColors.appendChild(itemColor);
    itemColor.value = color;
    itemColor.innerText = color;
    }
});












