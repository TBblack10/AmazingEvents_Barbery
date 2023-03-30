const contenedorDetailes = document.getElementById('detail-container')

async function mostrarTabla() {
    await fetch('https://mindhub-xj03.onrender.com/api/amazing')
        .then(response => response.json())
        .then(data => {
            arrayPast = past(data.events, data.currentDate)
            arrayUpcoming = upcoming(data.events, data.currentDate)
            console.log(arrayPast)
            tabla(results(assistance(arrayPast), assistance(arrayPast).reverse(), capacity(arrayPast)), "datosSuperior")
            secondTable(dataTable(arrayUpcoming), "upcoming")
            secondTable(dataTable(arrayPast), "past")
        })
}

mostrarTabla()

function upcoming(data, currentDate) {
    return data.filter(evento => evento.date > currentDate)
}

function past(data, currentDate) {
    return data.filter(event => event.date < currentDate)
}

function assistance(eventPast) {
    const arrayPercentage = eventPast.map(event => {
        return {
            attendance: (event.assistance / event.capacity) * 100,
            nameEvent: event.name
        }
    })
    arrayPercentage.sort((a, b) => b.attendance - a.attendance)
    return arrayPercentage

}

function capacity(eventPast) {
    const arrayCapacity = eventPast.map(event => {
        return {
            capacity: event.capacity,
            nameEvent: event.name
        }
    })
    arrayCapacity.sort((a, b) => b.capacity - a.capacity)
    return arrayCapacity

}

function results(highestPercentage, lowestPercentage, largerCapacity) {
    let all = {
        highestPercentage: highestPercentage[0].nameEvent,
        lowestPercentage: lowestPercentage[0].nameEvent,
        largerCapacity: largerCapacity[0].nameEvent
    }
    return all
}

function tabla(results, container) {
    const table = document.getElementById(container)
    table.innerHTML = `
    <tr>
        <td>${results.highestPercentage}</td>
        <td>${results.lowestPercentage}</td>
        <td>${results.largerCapacity}</td>
    </tr>
    `
}



function dataTable(evento) {
    let categories = Array.from(new Set(evento.map(a => a.category)));
    let eventCategories = categories.map(cat => evento.filter(event => event.category == cat))
    let result = eventCategories.map(eventCat => {
        let calculate = eventCat.reduce((acc, event) => {
            acc.category = event.category;
            acc.revenues += event.price * (event.assistance || event.estimate);
            acc.attendance += ((event.assistance || event.estimate) * 100) / event.capacity
            return acc
        }, {
            category: "",
            revenues: 0,
            attendance: 0
        })
        calculate.attendance = calculate.attendance / eventCat.length
        return calculate
    })
    return result;
}

function secondTable(evento, idTag) {
    const upcomingTable = document.getElementById(idTag)
    let html = evento.map(events => {
        return `
        <tr>
                <td>${events.category}</td>
                <td>$${events.revenues}</td>
                <td>${events.attendance.toFixed(2)}%</td>
            </tr>
        `
    })
    upcomingTable.innerHTML = html.join("")
}