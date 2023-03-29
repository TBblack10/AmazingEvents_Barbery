const cards = document.getElementById('cards')
const checkbox = document.getElementById('checkbox')
const input = document.querySelector('input')

input.addEventListener('input', superHiperMegaUltraFiltro)
checkbox.addEventListener('change', superHiperMegaUltraFiltro)


function superHiperMegaUltraFiltro(){
  let primerFiltro = filtrarTexto(data, input.value)
  let segundoFiltro = filtrarCategory(primerFiltro)
  pintarEventos(segundoFiltro)
}


pintarEventos(data)
crearCheckbox(data)


function crearCheckbox(array){
  let arrayCategorys = array.map(evento => evento.category)
  let setCategory = new Set(arrayCategorys)
  let arrayChecks = Array.from(setCategory)
  let checkboxes = ''
  arrayChecks.forEach(category => {
    checkboxes += `<div class="form-check form-check-inline">
    <input class="form-check-input" type="checkbox" id="${category}" value="${category}">
    <label class="form-check-label" for="${category}">${category}</label>
  </div>`
  })
  checkbox.innerHTML = checkboxes
}


function pintarEventos(array){
  if(array.length == 0){
      cards.innerHTML = `<h2 class="display-1 fw-bolder">No hay coincidencias</h2>`
      return
  }
  let tarjetas = ''
  array.forEach(evento => {
      tarjetas += `
      <div class="card" style="height: 400px; width: 15rem; color: white; background-color: rgba(76, 72, 72, 0.164);">
        <img src="${evento.image}" class="card-img-top" style="object-fit: cover; height: 190px" alt="Costume Party">
        <div class="card-body">
          <h5 class="card-title text-center">${evento.name}</h5>
          <p class="card-text">${evento.category}</p>
          <p class="card-text" style="height: 70px">${evento.description}</p>
          <div class="d-flex justify-content-end align-items-center">
            <small class="me-auto">Price $${evento.price}</small>
            <div class="btn-group">
              <a href="./details.html" type="button" class="btn btn-sm btn-outline-secondary">Details</a>
            </div>
          </div>
        </div>
      </div>`
  })
  cards.innerHTML = tarjetas
}


function filtrarTexto(array, texto){
  let arrayFiltrado = array.filter(evento => evento.name.toLowerCase().
  includes(texto.toLowerCase()))
  return arrayFiltrado
}


function filtrarCategory(array){
  let checkboxes = document.querySelectorAll("input[type='checkbox']")
  let array_checks = Array.from(checkboxes)
  let array_checksChecked = array_checks.filter(check => check.checked)
  let array_checksCheckedValues = array_checksChecked.map(checkChecked => checkChecked.value)
  let arrayFiltrado = array.filter(evento => array_checksCheckedValues.includes(evento.category))
  if(arrayFiltrado.length > 0){
    return arrayFiltrado
  }
  return array
}