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
    displayKanap(value);
})
// Si erreur, affiche le message ERREUR ! dans l'iD items
.catch(function(err) {
    console.log("ERREUR");
    document.getElementById('items').innerHTML = "ERREUR !"
});

// Fonction pour afficher les produits de l'api
function displayKanap(canapes) {
    // Déclaration de variable productKanap
    let productKanap = document.getElementById("items");
    // Boucle pour chaque modelde canapes dans l'api
    canapes.forEach((canape) => {
        productKanap.innerHTML += document.getElementById('items').innerHTML = // Ajout d'un autre model de canapés id items à chaque fois qu'on rentre dans la boucle
    `<a href="./product.html?id=${canape._id}">
        <article>
            <img src="${canape.imageUrl}" alt="${canape.altTxt}">
            <h3 class="productName">${canape.name}</h3>
            <p class="productDescription">${canape.description}</p>
        </article>
    </a>`
    }) 
}
