const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL) // basic fetch() method and feed it the required argument
    .then(function (response) { // returns a Promise which response we will work with as an argument to an anonymous function. 
        return response.json(); // We need to extract the JSON content from the noise of the full HTTP response by using the json() method
    })
    .then(function (jsonObject) { // work with the converted response data in JavaScript object format.
        const prophets = jsonObject['prophets'];
        console.table(jsonObject); // test to see if we get a valid, parsed response using a console.table() method to output the results to the console.
        prophets.forEach(displayProphets);
    })

function displayProphets(prophet) {
    let card = document.createElement('section');

    let h2 = document.createElement('h2');
    h2.innerHTML = `${prophet.name} ${prophet.lastname}`;
    card.appendChild(h2);

    let p1 = document.createElement('p');
    p1.innerHTML = `Date of Birth: ${prophet.birthdate}`;
    card.appendChild(p1);

    let p2 = document.createElement('p');
    p2.innerHTML = `Date of Birth: ${prophet.birthplace}`;
    card.appendChild(p2);

    let img = document.createElement('img');
    img.src = prophet.imageurl;
    img.setAttribute('alt', prophet.order);
    card.appendChild(img);
    
    document.querySelector('div.cards').appendChild(card);
}