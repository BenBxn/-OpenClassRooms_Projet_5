
//VARIABLES

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





//Ajouter des produits au panier avec local storage////////////////////////////////////////////////////

/*voir eventlistener ? */
ajoutPanierBtn.addEventListener("click", () => {

    //sélectionne l'id colors et quantity situés dans le html
    let Produit = {
        color : document.getElementById("colors").value,
        quantity : Number(document.getElementById("quantity").value),
    };
    // element de validation
    let valid = true;
    //verifier si couleur choisie
    if (
        Produit.color == "") 
        {
        valid = false;
        alert("Veuillez sélectionner une couleur.");
    }
    //verifier quantité
    if (
        Produit.quantity > 100 ||
        Produit.quantity < 1) 
        {
        valid = false; 
        alert("Veuillez sélectionner une quantité entre 1 et 100.");
    }
    if (valid) {
        ajoutPanier(Produit);
    }
});




//enregistrer panier dans le localStorage//////////////////////////////////////////////////////////////
function enrigistrerPanier(monPanier) {
    localStorage.setItem("monPanier", JSON.stringify(monPanier));
}
//recuperer les donnees du localStorage
function ajoutProduitPanier() {
    let enregistrerProduit = localStorage.getItem("monPanier");
    // verifier le cas où il y a deja des donnees enregistrees
    if (enregistrerProduit == null) {
        return [];
        } 
        //transformer les donnees du LocalStorage en javascript
        else {
        return JSON.parse(enregistrerProduit);
        }
}







//ajouter un produit 
function ajoutPanier(nouveauProduit) {
    let enregistrerProduits = ajoutProduitPanier();

// element de validation ?
// s'il y a deja des produits enregistres 
// si produit different 


    enregistrerProduits = [];
    enregistrerProduits.push(nouveauProduit);


//enregistrer les modifications dans le localStorage
enrigistrerPanier(enregistrerProduits);
}














