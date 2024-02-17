const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');

function getTime() {
    const time = new Date();
    let getHour = time.getHours();
    const getMinutes = time.getMinutes();
    const getSeconds = time.getSeconds();


    const hourDegrees = (getHour * 30) + (getMinutes / 2); // 30 degrees for each hour movement
    const minuteDegrees = (getMinutes * 6) + (getSeconds / 10); // 6 degrees for each minute movement
    const secondDegrees = getSeconds * 6; // 6 degrees for each second movement

    hour.style.transform = `rotate(${hourDegrees}deg)`;
    minute.style.transform = `rotate(${minuteDegrees}deg)`;
    if (getSeconds === 59) {
        second.style.transitionDuration = '0s';
    } else {
        second.style.transitionDuration = '0.05s';
    }
    second.style.transform = `rotate(${secondDegrees}deg)`;

}



getTime();//call the get time func
setInterval(getTime, 1000);//fetch time  every 1 sec
