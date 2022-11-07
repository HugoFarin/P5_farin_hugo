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
function displayKanap() {
    // Déclaration de variable productKanap
    let productKanap = document.getElementById("items");
    // Boucle pour chaque model kanap dans l'api
    for (let kanap of ) {
    productKanap.innerHTML += document.getElementById('items').innerHTML = // Ajout d'un autre model kanap id items à chaque fois qu'on rentre dans la boucle
    `<a href="./product.html?id=${._id}">
        <article>
            <img src="${.imageUrl}" alt="${.altTxt}">
            <h3 class="productName">${.name}</h3>
            <p class="productDescription">${.description}</p>
        </article>
    </a>`
    }
}
