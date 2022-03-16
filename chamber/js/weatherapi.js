const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=1684309&appid=449176179277dc10f72a2a1de3e312e4`;

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let temp = jsObject.list[0].main.temp;
        let wholeTemp = Math.round(temp/10);
        document.querySelector('#current-temp').textContent = wholeTemp;
        console.log(jsObject.list[0].main.temp);
        //document.querySelector('#current-temp').textContent = jsObject.list[0].main.temp;

        const iconsrc= `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;
        
        const desc = jsObject.list[0].weather[0].description;
        const descWords = desc.split(' ');

        for (let i=0; i < descWords.length; i++) {
            descWords[i] = descWords[i][0].toUpperCase() + descWords[i].substr(1);
        }

        // document.querySelector('#icon-src').textContent = iconsrc;
        document.querySelector('#weathericon').setAttribute('src', iconsrc);
        document.querySelector('#weathericon').setAttribute('alt', desc);
        document.querySelector('#weather-cond').textContent = descWords.join(' ');
        // document.querySelector('figcaption').textContent = desc;

        let windSpeed = jsObject.list[0].wind.speed;
        let wholeWindSpeed = Math.round(windSpeed);
        document.querySelector('#wind-speed').textContent = wholeWindSpeed;
    });