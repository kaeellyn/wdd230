let compDate = new Date();
const daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsName = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const day = daysName[compDate.getDay()];
const dateToday = compDate.getDate();
const month = monthsName[compDate.getMonth()];
const year = compDate.getFullYear();

const currentDate = `${day}, ${dateToday} ${month} ${year}`;

document.querySelector('#currentDate').innerHTML = currentDate;

// const dayJsObject = dayjs();
// document.querySelector('#currentDate').innerHTML = dayJsObject.format('dddd, DD MMMM YYYY')

// let dateTime = dayJsObject.format('MMM DD YYYY, dddd | h:m')
// document.querySelector('#submitdate').value = dateTime