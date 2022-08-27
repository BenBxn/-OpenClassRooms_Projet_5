const href = window.location.href;
const url = new URL(href);
const id = url.searchParams.get("id");


//inserer le numero de commande sur la page de confirmation
const numeroCommanded = document.getElementById("orderId");
numeroCommanded.textContent = recupNumeroCommanded();

//recuperer "orderID" depuis l'URL
function recupNumeroCommanded() {
    numeroCommanded.textContent = `${id}`;
}

window.addEventListener("DOMContentLoaded", function() {
    recupNumeroCommanded();
})