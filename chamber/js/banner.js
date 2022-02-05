let banner = document.querySelector('#head-banner')

const currentDay = new Date()
const dayOftheWeek = currentDay.getDay()

if (dayOftheWeek == 1 || dayOftheWeek == 2) {
    banner.style.display = 'block';
}
else {
    banner.style.display = 'none';
}