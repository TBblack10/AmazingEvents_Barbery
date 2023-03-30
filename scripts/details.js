const contenedorDetailes = document.getElementById('detail-container')


async function obtenerDetalles() {
    await fetch('https://mindhub-xj03.onrender.com/api/amazing')
        .then(response => response.json())
        .then(data => {
            const queryId = document.location.search
            console.log(queryId);
            const params = new URLSearchParams(queryId).get("id")
            console.log(params);

            const idParams = data.events.find(evento => evento._id === parseInt(params))
            console.log(idParams);

            contenedorDetailes.innerHTML = `<div class="card rounded-0 m-4 col-8" style="color: white; background-color: rgba(76, 72, 72, 0.164);">
            <img src="${idParams.image}" style="height:300px; object-fit: cover;" class="card-img" alt="${idParams.category}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title text-center">${idParams.name}</h5>
                <p class="card-text text-center">${idParams.description}</p>
                <div class="mt-auto">
                    <div class="d-flex flex-wrap align-items-center justify-content-around mx-0">
                        <p class="mx-3"><b>Date:</b> ${idParams.date}</p>
                        <p class="mx-3"><b>Price:</b> $${idParams.price}</p>
                        <p class="mx-3"><b>Place:</b> ${idParams.place}</p>
                        <p class="mx-3"><b>Capacity:</b> ${idParams.capacity}</p>
                        <p class="mx-3"><b>${Object.keys(idParams)[8].charAt(0).toUpperCase() + Object.keys(idParams)[8].slice(1)}:</b> ${Object.values(idParams)[8]}</p>
                    </div>
                </div>
            </div>`

        })

}

obtenerDetalles()

