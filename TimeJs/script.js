const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

function getTime() {
    const time = new Date();
    let getHour = time.getHours();
    const getMinutes = time.getMinutes();
    const getSeconds = time.getSeconds();

    // Determine if its in AM or PM
    const amPM = getHour >= 12 ? 'PM' : 'AM';

    // Convert the time format from 24-hour to 12-hour format
    getHour = getHour % 12 || 12;

    hour.textContent = getHour < 10 ? `0${getHour}` : getHour;
    minute.textContent = getMinutes < 10 ? `0${getMinutes}` : getMinutes;
    second.textContent = getSeconds < 10 ? `0${getSeconds}` : getSeconds;
    document.querySelector('small').textContent = amPM; 
}

getTime();
setInterval(getTime, 1000);
