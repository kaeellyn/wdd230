const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=1684309&appid=449176179277dc10f72a2a1de3e312e4`;
const tempNum = parseFloat(document.querySelector('#current-temp').textContent);
const speedNum = parseFloat(document.querySelector('#wind-speed').textContent);

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

        let windChill = 35.74 + (0.6215 * tempNum) - (35.75 * (Math.pow(speedNum, 0.16)) + 0.4275 * (Math.pow(speedNum, 0.16)));

        windChill = Math.round(windChill);
        console.log(windChill);
        if (tempNum <= 50 && speedNum > 3) {
            document.querySelector('#wind-chill').textContent = `${windChill} \xB0F`;
        } else {
            document.querySelector('#wind-chill').textContent = "N/A";
        }
    });