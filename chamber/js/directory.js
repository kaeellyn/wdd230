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
    let card = document.createElement("section");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let link = document.createElement("a");
    let img = document.createElement("img");
    // Change the textContent property of the elements to contain company info
    p1.innerHTML = `${company.address}`;
    p2.innerHTML = `${company.contact}`;
    link.innerHTML = `${company.website}`;
    link.setAttribute("href", `http://${company.website}`);
    img.setAttribute("src", `${company.logo}`);
    img.setAttribute("alt", `${company.name}`);

    // Add/append the section(card)
    card.appendChild(img);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(link);
    card.classList.add("dir1");
    
    document.querySelector('div.directory').appendChild(card);
}