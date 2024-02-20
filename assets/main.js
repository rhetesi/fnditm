'use strict';

const cardListGrid = document.querySelector('cardListGrid');

import { createCard } from "./createCard.js";
import { items} from "./db.js";

// const apiURL = 'https://my-json-server.typicode.com/rhetesi/fnditm';
// const apiURL = 'https://github.com/rhetesi/fnditm/blob/[main|master]/db.json';

let itemsArray = [];

/* // tárgyak lekérése API-ról
const getItemsFetch = () => {
    fetch(apiURL)                                                   // meghívjuk az API users lábát, lekérve a user adatokat json formátumban
    .then(response => response.json())
    .then(data => {
        itemsArray = data;                                          // a kapott json-t átadjuk a 5. sorban létrehozott üres tömbnek (későbbiekben ezzel dolgozunk)
    });
}

getItemsFetch(); */

itemsArray = items;


console.log(itemsArray);



const createCardList = (items) => {
    let cardList = '';

    items.forEach(item => {
        cardList += createCard(item);
    });

    cardListGrid.innerHTML = cardList;
}