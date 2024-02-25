'use strict';

let clg = document.querySelector('.clg');

import { items} from "./db.js";
import { createCard } from "./createCard.js";
// import {} from "./cardModal.js"; - itt kell behúzni, ha kész a cardModal.js függvénye

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


// console.log(itemsArray);

// clg.innerHTML = "hello";

const createCardList = (items) => {
    let cardList = '';

    items.forEach(item => {
        cardList += createCard(item);
    });

    console.log(cardList);

    clg.innerHTML = cardList;
}

createCardList(itemsArray);

const createItmesTable = (items) => {
    let itemsList = '';

    items.forEach(item => {
        itemsList += createItems(item);
    });

    clg.innerHTML("Hello");
}