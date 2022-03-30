// constants for nav menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
// constants for api, time, date, country
const dateElem = document.querySelector('.date');
// const timezone = document.querySelector('.time-zone');
// const country = document.querySelector('.country');
const day1 = document.querySelector('.day1');
const day2 = document.querySelector('.day2');
const day3 = document.querySelector('.day3');
const date1 = document.querySelector('.date1');
const date2 = document.querySelector('.date2');
const date3 = document.querySelector('.date3');

// DATE JS
let compDate = new Date();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const day = days[compDate.getDay()];
const daylog = compDate.getDay();
const dateToday = compDate.getDate();
const month = months[compDate.getMonth()];
const year = compDate.getFullYear();

const currentDate = `${day}, ${dateToday} ${month} ${year}`;

const nextDaylog = daylog + 1;
const nextDay = days[nextDaylog];

const twoDaylog = daylog + 2;
const twoDay = days[twoDaylog];

const threeDaylog = daylog + 3;
const threeDay = days[threeDaylog];

dateElem.innerHTML = currentDate;
day1.innerHTML = nextDay;
day2.innerHTML = twoDay;
day3.innerHTML = threeDay;

// NAV MENU JS
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll('.nav-link').forEach(n => n.
addEventListener("click"), () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });



