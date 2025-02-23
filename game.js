document.addEventListener("DOMContentLoaded", function() {
  let boutons = document.querySelectorAll(".acheter");
  
  boutons.forEach(button => {
    button.addEventListener("click", function() {
      let produit = this.getAttribute("data-nom");
      let prix = this.getAttribute("data-prix");
      
      // Génération d’un lien de paiement Orange Money
      let lienPaiement = `https://pay.orange.com?merchant_key=TON_MERCHANT_KEY&amount=${prix}&currency=XOF&order_id=${Date.now()}`;
      
      // Demander confirmation avant d’ouvrir la page de paiement
      if (confirm(`Voulez-vous acheter ${produit} pour ${prix}f ?`)) {
        window.location.href = lienPaiement;
      }
    });
  });
});