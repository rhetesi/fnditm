'use strict';

const apiURL = 'https://my-json-server.typicode.com/rhetesi/fnditm';

let itemsArray = [];

// tárgyak lekérése API-ról
const getItemsFetch = () => {
    fetch(apiURL)                                                   // meghívjuk az API users lábát, lekérve a user adatokat json formátumban
    .then(response => response.json())
    .then(data => {
        itemsArray = data;                                          // a kapott json-t átadjuk a 5. sorban létrehozott üres tömbnek (későbbiekben ezzel dolgozunk)
    });
}

getItemsFetch();

console.log(itemsArray);