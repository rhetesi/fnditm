'use strict';

export const createCard = (item) => {

  let cardpicture = '';
  if (item.picture) {
    cardpicture = item.picture
  } else {
    cardpicture = `<img src="../pics/placeholder_681_528px.png"`
  };
  /* const card = ` 
      <div class="col">
        <div class="card h-100" style="width: 18rem;" id=${item.id}>
          <img src="../pics/placeholder_681_528px.png" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">Dátum: ${item.founddate}</p>
            <p class="card-text">${item.description}</p>
            <a href="#" class="btn btn-primary">Megtekint</a>
          </div>
        </div>
      </div>`; */
  const card = ` 
      <div class="col">
        <div class="card h-100" style="width: 18rem;" id=${item.id}>
          ${cardpicture} class="card-img-top" alt=${item.name}>
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">Dátum: ${item.founddate}</p>
            <p class="card-text">${item.description}</p>
          </div>
          <div class="card-footer">
          <a href="#" class="btn btn-primary">Megtekint</a>
          </div>
        </div>
      </div>`;

  // console.log(card);

  return card;
}