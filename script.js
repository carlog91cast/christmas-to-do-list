

// /* -------------------
// OPERAZIONI PRELIMINARI
// --------------------*/

// // Prepariamo una chiave per lo storage
// const STORAGE_KEY = '__bool-xmas-list__';

// // prendo i singoli elementi dalla pagina html

// const totalPrice = document.querySelector('.giftTotalPrice');
// const giftsListElement = document.querySelector('.giftContainer');
// const form = document.querySelector('#giftForm');
// const nameField = document.querySelector('#nameField');
// const priceField = document.querySelector('#priceField');
// const giftField = document.querySelector('#giftField');

// // Prepariamo la lista

// let gifts = [];

// // ! Controllo subito se c'erano elementi salvati nello storage

// // const prevList = localStorage.getItem(STORAGE_KEY);

// // // Se ne trovi....

// // if (prevList) {

// //     // 1. Utilizziamo la lista precedente al posto di quella vuota

// //     gifts = JSON.parse(prevList);

// //     // 2. Ricalcolare il totale

// //     calcTotal();

// //     // 3. Rirenderizzare la lista

// //     renderList();

// // }

// /* -----------------------
// EVENTI DINAMICI

// ----------------------- */

// // Intercettiamo l'invio del form

// form.addEventListener('submit', function (event) {

//     // blocco il ricaricamento della pagina

//     event.preventDefault();

//     // prendiamo i dati dopo aver popolato i campi

//     const name = nameField.value.trim();
//     const price = priceField.value.trim();
//     const description = giftField.value.trim();
//     console.log(name, price, description);

//     // aggiungo un regalo alla lista

//     addGift(name, price, description);

//     form.reset();

//     nameField.focus();

// });

// // come aggiungere un regalo alla lista

// function addGift(name, price, gift) {
//     // creo un oggetto per il regalo

//     const giftObj = {
//         name,
//         price: Number(price),
//         gift
//     };

//     // aggiungo il regalo alla lista

//     gifts.push(giftObj);
//     console.log(gifts);

//     // ricalcolo il totale

//     //calcTotal();

//     // rirenderizzo la lista

//     renderList();

// }

// // funzione per calcolare il totale
// function calcTotal() {

//     let total = 0;
//     // aggiungo il prezzo per ogni regalo
//     for (let i = 0; i < gifts.length; i++) {
//         total += gifts[i].price
//     }
//     totalPrice.innerText = formatPrice(total);
// }





// // formatto la cifra

// function formatPrice(price) {
//     return price.toFixed(2) + '???';
// }

// // renderizzo la lista

// function renderList() {

//     //  svuoto la lista

//     giftsListElement.innerHTML = '';

//     // ciclo la lista

//     for (let index = 0; index < gifts.length; index++) {
//         const giftIndex = createGiftElement(index);
//         giftsListElement.innerHTML += giftIndex;

//     }
//     // rendo cliccabili i bottoni di cancellazione

//     setDeleteButtons();

// }

// // creo un elemento per il regalo

// function createGiftElement(index) {
//     const gift = gifts[index];
//     return `
//     <li class="gift d-flex">
//         <div class="giftInfo">
//             <h3 class="m-0 pb-1 fw-bold fs-2">${gift.name}</h3>
//             <p class="m-0">${gift.gift}</p>
//         </div>
//         <strong class="giftPrice">${(gift.price)}</strong>
//         <button class="giftButton" data-index="${index}">???</button>
//     </li>`;

// }

// // Funzione per attivare i bottoni di cancellazione
// function setDeleteButtons() {
//     // 1. Recuperare tutti i bottoni dei regali
//     const deleteButtons = document.querySelectorAll('.giftButton');

//     // 2. Per ognuno dei bottoni....
//     for (let i = 0; i < deleteButtons.length; i++) {
//         // 3. REcuperiamo (per comodit??) il singolo bottone ad ogni giro
//         const button = deleteButtons[i];

//         // 4. Aggiungo l'event listener
//         button.addEventListener('click', function () {
//             // 5. Individuo l'index corrispondente
//             const index = button.dataset.index;

//             // 6. Rimuovo dalla lista il regalo corrispondente
//             removeGift(index);
//         });
//     }
// }


// // Funzione per rimuovere un regalo dalla lista
// function removeGift(index) {
//     // 1. Rimuovo il regalo dalla lista
//     gifts.splice(index, 1);
//     console.log(gifts);

//     // ! Aggiornare il localStorage
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(gifts));

//     // 2. Ricalcoliamo il totale
//     calcTotal();

//     // 3. Rirenderizzare la lista
//     renderList();
// }

// rewind

/* -------------------
OPERAZIONI PRELIMINARI
--------------------*/

// Prepariamo una chiave per lo storage
const STORAGE_KEY = '__bool-xmas-list__';

// Raccogliamo tutti gli elementi di interesse dalla pagina HTML
const totalSlot = document.querySelector('.giftTotalPrice');
const giftsListElement = document.querySelector('.giftContainer');

const form = document.querySelector('#giftForm');
const nameField = document.querySelector('#nameField');
const priceField = document.querySelector('#priceField');
const descriptionField = document.querySelector('#giftField');

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
  // 1. blocchiamo il ricaricamento della pagina (perch?? vogliamo gestirlo con JS)
  event.preventDefault();

  // 2. Raccogliere i dati dai campi
  const name = nameField.value.trim();
  const price = priceField.value.trim();
  const description = giftField.value.trim();

  // 3. Aggiungere un regalo alla lista
  addGift(name, price, description);

  // 4. Ripuliamo il form
  form.reset();

  // 5. Riportiamo il focus (il cursore) sul primo campo
  nameField.focus();
});



/* ------------------
FUNZIONI
------------------*/

// Funzione per aggiungere un regalo alla lista
function addGift(name, price, description) {
  // 1. Creiamo un nuovo oggetto che rappresenta il regalo
  const newGift = {
    name,
    price: Number(price),
    description
  };

  // 2. Aggiungiamo l'oggetto alla lista
  gifts.push(newGift);
  console.log(gifts);

  // ! Aggiornare il localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(gifts));

  // 3. Calcoliamo il totale
  calculateTotal();

  // 4. Renderizziamo (mostriamo su schermo) la lista dei regali
  renderList()
}


// Funzione per calcolare il totale
function calculateTotal() {
  // 1. Mi preparo a calcolare
  let total = 0;

  // 2. Per ogni regalo...
  for (let i = 0; i < gifts.length; i++) {
    // 3. Aggiungiamo il prezzo al totale
    total += gifts[i].price;
  }


  // 4. Stampiamo in pagina il totale
  giftTotalPrice.innerText = formatAmount(total);
}


// Funzione per formattare una cifra
function formatAmount(amount) {
  return amount.toFixed(2) + '???';
}

// Funzione per renderizzare la lista dei regali
function renderList() {
  // 1. Svuotiamo la lista precedente (non aggiornata)
  giftsListElement.innerHTML = '';

  // 2. Per tutti i regali...
  for (let i = 0; i < gifts.length; i++) {
    // 3. creo il codice per un singolo elemento della lista
    const giftElement = createListElement(i);

    // 4. Lo aggancio alla lista nella pagina
    giftsListElement.innerHTML += giftElement;
  }

  // 5. Rendo cliccabili i bottoni
  setDeleteButtons();
}

// Funzione per creare un elemento della lista
function createListElement(i) {
  // Recuperiamo il regalo
  const gift = gifts[i];

  // Restituisce il codice HTML di un regalo nella lista
  return `
  <li class="gift">
    <div class="gift-info">
      <h3>${gift.name}</h3>
      <p>${gift.description}</p>
    </div>
    <strong class="gift-price">${formatAmount(gift.price)}</strong>
    <button class="gift-button" data-index="${i}">???</button>
  </li>
  `;
}


// Funzione per attivare i bottoni di cancellazione
function setDeleteButtons() {
  // 1. Recuperare tutti i bottoni dei regali
  const deleteButtons = document.querySelectorAll('.giftButton');

  // 2. Per ognuno dei bottoni....
  for (let i = 0; i < deleteButtons.length; i++) {
    // 3. REcuperiamo (per comodit??) il singolo bottone ad ogni giro
    const button = deleteButtons[i];

    // 4. Aggiungo l'event listener
    button.addEventListener('click', function () {
      // 5. Individuo l'index corrispondente
      const index = button.dataset.index;

      // 6. Rimuovo dalla lista il regalo corrispondente
      removeGift(index);
    });
  }
}


// Funzione per rimuovere un regalo dalla lista
function removeGift(index) {
  // 1. Rimuovo il regalo dalla lista
  gifts.splice(index, 1);
  console.log(gifts);

  // ! Aggiornare il localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(gifts));

  // 2. Ricalcoliamo il totale
  calculateTotal();

  // 3. Rirenderizzare la lista
  renderList();
}