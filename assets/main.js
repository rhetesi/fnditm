'use strict';

let clg = document.querySelector('.clg');

import {
    items
} from "./db.js";
import {
    createCard
} from "./createCard.js";
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

const firstOrAddNewCard = `
    <div class="col">
        <div class="card h-100 addNewItem align-middle" style="width: 18rem;" id="">
            <div class="card-body mt-5 pt-5">
                <h1 class="card-title mt-5 pt-5 text-success">+</h1>
            </div>
            <div class="card-footer">
                <a href="#" class="btn btn-success">Új elem felvétele</a>
            </div>
        </div>
    </div>
`;
// console.log(itemsArray);

// clg.innerHTML = "hello";
let cardList = '';

const createCardList = (items) => {
    let cardList = '';
    

    items.forEach(item => {
        cardList += createCard(item);
    });

    // console.log(cardList);
    const cardGrid = `${firstOrAddNewCard}, ${cardList}`
    clg.innerHTML = cardGrid;
    // return cardList;
}

createCardList(itemsArray);


const createItmesTable = (items) => {
    let itemsList = '';

    items.forEach(item => {
        itemsList += createItems(item);
    });

    clg.innerHTML("Hello");
}


const handleClick = () => {
    let buttons = document.querySelectorAll('.button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
            //console.log(buttons[i].value);
            console.log(buttons[i].innerHTML);
        })
    }
}

handleClick();