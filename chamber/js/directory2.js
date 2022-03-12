const requestURL = 'https://kaeellyn.github.io/wdd230/chamber/js/data.json';

fetch(requestURL) // basic fetch() method and feed it the required argument
    .then(function (response) { // returns a Promise which response we will work with as an argument to an anonymous function. 
        return response.json(); // We need to extract the JSON content from the noise of the full HTTP response by using the json() method
    })
    .then(function (jsonObject) { // work with the converted response data in JavaScript object format.
        const companies = jsonObject['companies'];
        console.table(jsonObject); // test to see if we get a valid, parsed response using a console.table() method to output the results to the console.
        companies.forEach(displayCompanies);
    })

function displayCompanies(company) {
    let cards = document.createElement("section");
    let h2 = document.createElement("h2");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let link = document.createElement("a");
    let img = document.createElement("img");
    let classDir = document.querySelector('.directory');
    let idDir = document.querySelector('#dir');
    let evenDir = document.querySelectorAll('.directory:nth-child(even)');

    h2.textContent = `${company.company}`
    p1.textContent = `${company.address}`;
    p2.textContent = `${company.contact}`;
    link.textContent = `${company.website}`;
    link.setAttribute("href", `${company.website}`);
    img.setAttribute("src", `${company.logo}`);
    img.setAttribute("alt", `${company.company}`);

    function defaultView() {
        cards.appendChild(img);
        cards.appendChild(h2);
        cards.appendChild(p1);
        p1.classList.add('hidden');
        cards.appendChild(p2);

        cards.appendChild(link);
        cards.classList.add("dir");

        document.querySelector('div.directory').appendChild(cards);
    }

    defaultView();
    

    const gridViewBtn = document.querySelector('.fa-table-cells-large');
    const listViewBtn = document.querySelector('.fa-table-list');

    listViewBtn.addEventListener('click', function () {
        listView();
    });

    gridViewBtn.addEventListener('click', function () {
        defaultView();
        listViewRemove();
    });

    function listView() {
        p1.classList.remove('hidden');
        img.classList.add('hidden');

        listViewBtn.classList.add('view-active');
        gridViewBtn.classList.remove('view-active');

        cards.style.border = 0;
    }

    function listViewRemove() {
        p1.classList.add('hidden');

        img.classList.remove('hidden');

        gridViewBtn.add('view-active');
        listViewBtn.remove('view-active');

        if (vw >= 560) {
            classDir.classList.remove('list-layout-med');

            classDir.forEach((section) => {
                section.classList.remove('list-col');
            });

            classDir.lastElementChild.classList.remove('list-col');
        }
    }
}
