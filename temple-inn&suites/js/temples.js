const requestURL = 'https://kaeellyn.github.io/wdd230/temple-inn&suites/data/temples.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const temples = jsonObject['temples'];
        console.table(jsonObject);
        temples.forEach(displayTemples);
    })

function displayTemples(temple) {
    let cards= document.createElement("section");
    let p0 = document.createElement("p");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let img = document.createElement("img");
    let classDir = document.querySelector('.temples');
    let idDir = document.querySelector('#temp');

    p0.textContent = `${temple.temple}`;
    p1.textContent = `${temple.address}`;
    p2.textContent = `${temple.telephone}`;
    p3.textContent = `${temple.services}`;
    p4.textContent = `${temple.schedule}`;
    img.setAttribute("src", `${temple.image}`);
    img.setAttribute("alt", `${temple.temple}`);

    cards.appendChild(img);
    cards.appendChild(p0);
    cards.appendChild(p1);
    cards.appendChild(p2);
    cards.appendChild(p3);
    cards.appendChild(p4);
    cards.appendChild(img);

    classDir.appendChild(cards);
}