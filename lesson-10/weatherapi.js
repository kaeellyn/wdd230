const apiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5861897&appid=449176179277dc10f72a2a1de3e312e4'

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.querySelector('#current-temp').textContent = jsObject.list[0].main.temp;

        const iconsrc= `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;
        const desc = jsObject.list[0].weather[0].description;
        document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('figcaption').textContent = desc;
    });



