//Confirmation

// Constante pour inserer le numero de commande sur la page de confirmation
const orderId = document.getElementById("orderId");
// Afficher le numéro de commande
orderId.textContent = getOrderId();

// Fonction pour recuperer "orderID" depuis l'URL
function getOrderId() {
    const url = new URL(location.href);
    return url.searchParams.get("order");
}




/*
window.addEventListener("DOMContentLoaded", function() {
    getOrderId();
})*/
