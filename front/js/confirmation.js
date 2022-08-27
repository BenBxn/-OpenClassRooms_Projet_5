//inserer le numero de commande sur la page de confirmation
const orderId = document.getElementById("orderId");
orderId.textContent = getOrderId();

//recuperer "orderID" depuis l'URL
function getOrderId() {
  const url = new URL(location.href);
  return url.searchParams.get("order");
}




/*const href = window.location.href;
const url = new URL(href);
const id = url.searchParams.get("id");


//inserer le numero de commande sur la page de confirmation
const numeroCommande = document.getElementById("orderId");
numeroCommande.textContent = recupNumeroCommande();

//recuperer "orderID" depuis l'URL
function recupNumeroCommande() {
    numeroCommande.textContent = `${id}`;
}

window.addEventListener("DOMContentLoaded", function() {
    recupNumeroCommande();
})*/