let cont = document.getElementById("container");

let prodotto = {
    name: "",
    type: "",
    price: 0.0
};

let listaProdotti = [
    {
        name: "Samsung S24",
        type: "Telefono",
        price: 389.99
    },
    {
        name: "Samsung S4",
        type: "Telefono",
        price: 389.90
    }
];

let listaCarrello = [];

let listaProdottiId = listaProdotti.map((oggetto, indice) => ({
    ...oggetto,
    id: indice + 1
}));

function addCarrello(id) {
    let prodotto = listaProdottiId.find(oggetto => oggetto.id === id);

    if (prodotto) {
        listaCarrello.push(prodotto);
        console.log("Prodotto aggiunto al carrello:", prodotto);
        console.log("Carrello:", listaCarrello);
    }
}
