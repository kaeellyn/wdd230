const apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`;

const dateElem = document.querySelector('.date');
const countryElem = document.querySelector('.country');
const weather = document.querySelector('.weather-value');
const futureWeather = document.querySelector('.future-forecast');
const currentWeatherItemsElem = document.querySelectorAll('#current-weather-items');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

setInterval(() => {
    const dateToday = new Date();
    const month = dateToday.getMonth();
    const date = dateToday.getDate();
    const day = dateToday.getDay();
    const hour = dateToday.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
    const minutes = dateToday.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    dateElem.innerHTML = days[day] + ', ' + date+ ' ' + months[month]

}, 1000);

getWeatherData()

function getWeatherData () {
    navigator.geolocation.getCurrentPosition((success) => {
        
        let {latitude, longitude} = success.coords;

        fetch(apiURL)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                showWeatherData(data);
            })
     })
}

function showWeatherData (data) {
    let {temp, description, humidity} = data.current;

    currentWeatherItemsElem.innerHTML = 
    `<figure>
        <img src="" alt="weather icon" id="weather-icon" />  
    <!-- <figcaption></figcaption> -->
    </figure>
    <h3><span id="current-temp"></span>${temp}&#176;</h3>
    <p><span id="weather-cond">${description}</span></p>
    <p><span id="humidity"></span>${humidity} % (Humidity)</p>`
}

