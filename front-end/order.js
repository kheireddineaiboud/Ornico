const order = JSON.parse(localStorage.getItem("order")) || [];

// affiche Mes informations
const informations = document.getElementById("contact");
informations.innerHTML += `
    <p class="fs-5"><span class="fw-bold text-capitalize">${order.contact.firstName} ${order.contact.lastName}</span>, merci pour votre achat sur notre site !</p>
    <p class="fs-5">Votre commande porte la référence <span class="fw-bold">${order.orderId}</span>.</p>
    <p class="fs-5">le montant total de votre commande est de : <span class="fw-bold">${convertPrice(displayTotalBasket())}</span> a été validée.</p>
    <p class="fs-5">Votre facture va vous être transmise par mail à : <span class="fw-bold">${order.contact.email}</span>.</p>
    <p class="fs-5">Votre commande sera envoyée à l'adresse suivante :
    <div class=" fs-5 text-center fw-bold">
        <p class="text-capitalize">${order.contact.address}</p>
        <p class="text-capitalize">${order.contact.city}</p>
    </div>
    `;
//vide le localStorage
const clickHome = document.getElementById("accueil");
clickHome.addEventListener("click", () => {
    clearBasket();
    location.reload();
});
