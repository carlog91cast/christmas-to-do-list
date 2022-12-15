

/* -------------------
OPERAZIONI PRELIMINARI
--------------------*/

// Prepariamo una chiave per lo storage
const STORAGE_KEY = '__bool-xmas-list__';

// prendo i singoli elementi dalla pagina html

const totalPrice = document.querySelector('.giftPrice');
const giftsListElement = document.querySelector('.giftsContainer');
const form = document.querySelector('#gift-form');
const nameField = document.querySelector('#nameField');
const priceField = document.querySelector('#priceField');
const giftField = document.querySelector('#giftField');

// Prepariamo la lista

let gifts = [];

// ! Controllo subito se c'erano elementi salvati nello storage

const prevList = localStorage.getItem(STORAGE_KEY);

// Se ne trovi....

if (prevList) {
    
    // 1. Utilizziamo la lista precedente al posto di quella vuota
    
    gifts = JSON.parse(prevList);
    
    // 2. Ricalcolare il totale
    
    calculateTotal();
    
    // 3. Rirenderizzare la lista
    
    renderList();
    
    }

/* -----------------------
EVENTI DINAMICI

----------------------- */

// Intercettiamo l'invio del form

form.addEventListener('submit', function (event) {

    // blocco il ricaricamento della pagina

    event.preventDefault();

    // prendiamo i dati dopo aver popolato i campi

    const name = nameField.value.trim();
    const price = priceField.value.trim();
    const description = giftField.value.trim();
    console.log(name, price, description);

    // aggiungo un regalo alla lista


});

// come aggiungere un regalo alla lista

function addGift(name, price, gift){
    // creo un oggetto per il regalo

    const giftObj = {
        name: name,
        price: Number(price),
        gift: gift,
    };

    // aggiungo il regalo alla lista

    gifts.push(giftObj);
    console.log(gifts);

    // ricalcolo il totale

    calcTotal();

    // rirenderizzo la lista

    renderList();

    // salvo la lista nello storage

    saveList();
}

// funzione per calcolare il totale
function calcTotal(){

    const total = 0;
    // aggiungo il prezzo per ogni regalo
    for (let i = 0; i < gifts.length; i++) {      
        total += gifts[i].price
        console.log(total);
   
    }
}

// stampo nel dom il totale

totalPrice.innerHTML = formatPrice(total);

// formatto la cifra

function formatPrice(price){
    return price.toFixed(2) + '€';
}

// renderizzo la lista

function renderList(){

    //  svuoto la lista

    giftsListElement.innerHTML = '';
    