'use strict';

export const createCard = (item) => {
    const card = ` 
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">Dátum: ${item.founddate}</p>
            <p class="card-text">${item.description}</p>
            <a href="#" class="btn btn-primary">Megtekint</a>
          </div>
        </div>
      </div>`;

      // console.log(card);
                        
    return card;
}