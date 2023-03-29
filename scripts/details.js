async function details(urlApi) {
  try {
      const response = await fetch(urlApi);
      let data = await response.json();
      let event = data.events.find(event => event._id == id);
      
      document.getElementById('backArrow').addEventListener("click", () => {
          history.back();
      });

      document.getElementById('cardContainer').innerHTML = 
      `<div class="card border-dark rounded-0 sombreado m-4 col-8">
              <img src="${event.image}" class="card-img-top border border-dark mt-3 sombreado" alt="food fair">
              <div class="card-body d-flex flex-column">
                  <h5 class="card-title text-center">${event.name}</h5>
                  <p class="card-text text-center">${event.description}</p>
                  <div class="mt-auto">
                      <div class="d-flex flex-wrap align-items-center justify-content-around mx-0">
                          <p class="mx-3"><b>Date:</b> ${event.date}</p>
                          <p class="mx-3"><b>Price:</b> $${event.price}</p>
                          <p class="mx-3"><b>Place:</b> ${event.place}</p>
                          <p class="mx-3"><b>Capacity:</b> ${event.capacity}</p>
                          <p class="mx-3"><b>${Object.keys(event)[9].charAt(0).toUpperCase() + Object.keys(event)[9].slice(1)}:</b> ${Object.values(event)[9]}</p>
                      </div>
                  </div>
              </div>
          </div>`;

  }
  catch(error) {
      console.log("ERROR: " + error)
  }
}

let urlApi = " https://mindhub-xj03.onrender.com/api/amazing";

let whereIAm = location.search;
let params = new URLSearchParams(whereIAm);
let id = params.get('id');

details(urlApi);