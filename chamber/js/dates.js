const dayJsObject = dayjs();
document.querySelector('#currentDate').innerHTML = dayJsObject.format('dddd, DD MMMM YYYY')

let dateTime = dayJsObject.format('MMM DD YYYY, dddd | h:m')
document.querySelector('#submitdate').value = dateTime