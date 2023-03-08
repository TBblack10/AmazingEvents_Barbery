let card = ''

for(evento of eventos){
    tarjetas += `<div class="card" style="height: 350px; width: 15rem; color: white; background-color: rgba(76, 72, 72, 0.164);">
    <img src="./images/Marathon.jpg" class="card-img-top" alt="Marathon">
    <div class="card-body">
      <h5 class="card-title text-center">${evento.name}</h5>
      <p class="card-text">${evento.date}</p>
      <p class="card-text">${evento.description}</p>
      <div class="d-flex justify-content-end align-items-center">
        <small class="text-muted me-auto">Price 0000</small>
        <div class="btn-group">
          <a href="./details.html" type="button" class="btn btn-sm btn-outline-secondary">Details</a>
        </div>
      </div>
    </div>
  </div> `
}