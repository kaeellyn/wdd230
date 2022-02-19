// initialize display elements
// const lastVisit = document.querySelector('lastVisit');
let lastVisitText = document.querySelector('#lastVisit');

// get the stored value in localStorage
let lastVisitDisplay = window.localStorage.getItem("lastVisit");

// determine if this is the first visit or display the number of visits.
if (lastVisitDisplay === undefined) {
    lastVisitDisplay = new Date(Date.now());
}

const lastVisit = Date.parse(lastVisitDisplay);
const num = 1000 * 60 * 60 * 24;

let daysBetween = Date.now() - lastVisit;
let numberOfDays = daysBetween / num;

window.localStorage.setItem('lastVisit', new Date(Date.now()));

const daysSinceVisit = Math.floor(numberOfDays);
lastVisitText.innerHTML = daysSinceVisit;