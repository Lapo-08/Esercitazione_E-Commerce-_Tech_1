let cont = document.getElementById("container");

let prodotto = {
    name:"",
    type:"",
    price:0.0
};

let listaProdotti = [
    {
        name:"Samsung S24",
        type:"Telefono",
        price:389.99
    },
    {
        name:"Samsung S4",
        type:"Telefoo",
        price:389.9
    }
];
let listaCarrello = []

let listaProdottiId = listaProdotti.map((oggetto,indice) => ({...oggetto,id:indice+1}));


console.log(listaProdottiId)

function creaLista() {
    cont.innerHTML=""

    listaProdottiId.forEach(ogg =>{
            // TODO fare auto creazione dei div ed ecc
    })
}


function addCarrel(id) {
    let prodotto = listaProdottiId.find(id)
    listaCarrello.push(prodotto)
}