
// Récupération du résultat de la requête
fetch("http://localhost:3000/api/products/")
// Récupération du résultat de la requête au format json
.then(function(res) {
    if (res.ok) {
        return res.json();
    }
})
// Récupération de la valeur du résultat 
.then(function(value) {
    console.log(value);
    displayProduct(value);
})
// Si erreur, affiche le message ERREUR ! dans l'iD items
.catch(function(err) {
    console.log("ERREUR");
    document.getElementById('items').innerHTML = "ERREUR !"
});

// Fonction pour afficher du produit de l'api
function displayProduct(product) {
    let image = document.querySelector("div.item__img");
    let title = document.querySelector("#title");
    let price = document.querySelector("#price");
    let description = document.querySelector("#description");
    let colors = document.querySelector("#colors");
}
