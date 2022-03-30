// constants for weather values
const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=5147302&appid=b931fca2b09550621e789281c0873057`;
const weatherCond = document.querySelector('#weather-cond');
const tempNum = document.querySelector('#current-temp');
const nextDTemp = document.querySelector('#temp1');
const twoDTemp = document.querySelector('#temp2');
const threeDTemp = document.querySelector('#temp3');
const humidityElem = document.querySelector('#humidity');

// navigator.geolocation.getCurrentPosition((success) => {
//     let {latitude, longitude} = success.coords;

//     const apiURL = 
// })
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        // Current Temperature
        let temp = jsObject.list[0].main.temp;
        let wholeTemp = Math.round(temp / 10);
        tempNum.textContent = wholeTemp;
        console.log(jsObject.list[0].main.temp);
        console.log(wholeTemp);

        // Current Humidity
        let humidity = jsObject.list[0].main.humidity;
        humidityElem.textContent = humidity;

        // Current Weather Icon
        const iconsrc = `https://openweathermap.org/img/w/${jsObject.list[0].weather[0].icon}.png`;

        // Current Weather Description/Condition
        const desc = jsObject.list[0].weather[0].description;
        const descWords = desc.split(' ');

        for (let i=0; i < descWords.length; i++) {
            descWords[i] = descWords[i][0].toUpperCase() + descWords[i].substr(1);
        }

        document.querySelector('#weather-icon').setAttribute('src', iconsrc);
        document.querySelector('#weather-icon').setAttribute('alt', desc);
        document.querySelector('#weather-cond').textContent = descWords.join(' ');

        // Future Temp Forecast
        const iconsrcNext = `https://openweathermap.org/img/w/${jsObject.list[7].weather[0].icon}.png`;
        let nextTemp = jsObject.list[7].main.temp;
        let wholeNextTemp = Math.round(nextTemp / 10);
        nextDTemp.textContent = wholeNextTemp;
        
        const iconsrcTwo = `https://openweathermap.org/img/w/${jsObject.list[14].weather[0].icon}.png`;
        let twoTemp = jsObject.list[14].main.temp;
        let wholeTwoTemp = Math.round(twoTemp / 10);
        twoDTemp.textContent = wholeTwoTemp;
        console.log(wholeTwoTemp);

        const iconsrcThree = `https://openweathermap.org/img/w/${jsObject.list[21].weather[0].icon}.png`;
        let threeTemp = jsObject.list[21].main.temp;
        let wholeThreeTemp = Math.round(threeTemp / 10);
        threeDTemp.textContent = wholeThreeTemp;
        console.log(wholeThreeTemp);

        document.querySelector('.w-icon-next').setAttribute('src', iconsrcNext);
        document.querySelector('.w-icon-two').setAttribute('src', iconsrcTwo);
        document.querySelector('.w-icon-three').setAttribute('src', iconsrcThree);
    });
