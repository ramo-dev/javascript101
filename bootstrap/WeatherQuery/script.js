window.addEventListener('load', () => {
  console.log('Window loaded');
  setTimeout(() => {
    console.log('Timeout expired');
    const preloader = document.querySelector('.preloader');
    console.log('Preloader:', preloader);
    preloader.classList.add('remove');
    preloader.style.transition = '1s ease-in-out'
  }, 3000);
});




let api = 'b78420e1a26c41c1ac9132703242302'
console.log()
let limit = '2'
const date = new Date();
const day = date.getDay();
const month = date.getMonth();
const year = date.getFullYear();

const time = new Date()
const hour = time.getHours()
const minute = time.getMinutes()


function convertDayToString(day) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[day];
}

function convertMonthToString(month) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[month];
}

const dayString = convertDayToString(day);
const monthString = convertMonthToString(month);


let weatherCard = `
                <div class="card border-0 container text-center mt-4" style="width: 15rem;">
                      <img src="//cdn.weatherapi.com/weather/64x64/night/116.png" class="card-img-top" alt="...">
                <div class="card-body">
                      <h5 class="card-title"><span class="display-2 fw-700 ">21</span><span class="display-5 position-absolute me-1 ">°C</span></h5>
                      <p>Mostly Cloudy</p>
                      <hr>
                <small class="card-text">${day}-${monthString}-${year}</small>
                  <br>
                  <a href="https://www.google.com/?q=paris" target="_blank"  class="link-primary fs-3 text-decoration-none ">Paris</a>
                  </div>
                </div>`


document.querySelector('.querySection').innerHTML += weatherCard;
const pendingMessage = document.querySelector(".custom-loader");

document.querySelector('.searchbtn').addEventListener('click', async () => {
  let cityName = document.querySelector('input').value
  document.querySelector('.card').innerHTML = `<div class="custom-loader" style="margin:70% 40%"></div>`;

        try {
            const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${api}&q=${cityName}`);

      
      const data = await response.json();
      console.log(data);
      
      const location = data.location;
      const current = data.current;
      const forecast = {
          country: location.country,
          name: location.name,
          icon: current.condition.icon,
          text: current.condition.text,
          humidity: current.humidity,
          temperature: current.temp_c,
          wind: current.wind_kph,
          feelslike_c: current.feelslike_c,
          uv: current.uv,
          pressure_mb: current.pressure_mb,
          gust_kph: current.gust_kph,
          day_time : current.is_day
      };

      const weatherCard = `
          <div class="card border-0 container text-center mt-4" style="width: 15rem;">
              <img src="${forecast.icon}" class="card-img-top" alt="...">
              <div class="card-body">
                  <h5 class="card-title"><span class="display-2 fw-700 ">${forecast.temperature}</span><span class="display-5 position-absolute me-1 ">°C</span></h5>
                  <p>${forecast.text}</p>
                  <hr>
                  <small class="card-text">${day}-${monthString}-${year}</small>
                  <br>
                  <a href="https://www.google.com/?q=${cityName}" target="_blank" class="link-primary fs-3 text-decoration-none ">${cityName}</a>
              </div>
          </div>`;

      document.querySelector('.pressure').textContent = `${forecast.pressure_mb} mb`;
      document.querySelector('.uv').textContent = `${forecast.uv}`;
      document.querySelector('.feel').textContent = `${forecast.feelslike_c}°C`;
      document.querySelector('.humidity').textContent = `${forecast.humidity}%`;
      document.querySelector('.wind').textContent = `${forecast.wind} km/h`;
      document.querySelector('.gust_kph').textContent = `${forecast.gust_kph} kp/h`;

      document.querySelector('.querySection').innerHTML = weatherCard;
  } catch (error) {
  alert(`Error Finding Weather for location : ${cityName}.
Please Enter a valid location`)
      console.log("Error: " + error);
  } finally {
      pendingMessage.style.display = "none";
  }
});



