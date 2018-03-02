const api = "https://fcc-weather-api.glitch.me/api/current?";
let lat;
let lon;
let urlStr = "";
const currentTime = new Date();
const day = currentTime.getHours() > 6 && hours < 19;




window.onload = function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      let lat = "lat=" + position.coords.latitude;
      let lon = "lon=" + position.coords.longitude;
      urlStr += api + lat + "&" + lon;
      const xhr = new XMLHttpRequest();

      xhr.open("GET", urlStr, true);
      xhr.onload = function(e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log(xhr.responseText);
            response = JSON.parse(xhr.responseText);
            console.log("Location: " + response.name);
            //Location
            const loc = document.querySelector(".location");
            loc.innerHTML = `<h1>${response.name}</h1>`;
            //gif image
            const image = document.getElementById("image");
            //WeatherIcon
            const weatherIcon = document.querySelector(".weatherIcon");
            if (response.weather[0].id === 200 ||
              response.weather[0].id === 201 ||
              response.weather[0].id === 202 ||
              response.weather[0].id === 210 ||
              response.weather[0].id === 211 ||
              response.weather[0].id === 212 ||
              response.weather[0].id === 221 ||
              response.weather[0].id === 230 ||
              response.weather[0].id === 231 ||
              response.weather[0].id === 232) {
              if (day) {
                weatherIcon.innerHTML = `<i class="wi wi-day-thunderstorm"></i>`;
                image.src = "https://media.giphy.com/media/JYEKQ8Vlb7wXu/giphy.gif";
              } else {
                weatherIcon.innerHTML = `<i class="wi wi-night-thunderstorm"></i>`;
                image.src = "https://media.giphy.com/media/JYEKQ8Vlb7wXu/giphy.gif";
              }
            } else if (response.weather[0].id === 801 ||
              response.weather[0].id === 802 ||
              response.weather[0].id === 803) {
              if (day) {
                weatherIcon.innerHTML = `<i class="wi wi-day-cloudy"></i>`;
                image.src = "https://m.popkey.co/72eeda/dJOv6.gif";
              } else {
                weatherIcon.innerHTML = `<i class="wi wi-night-alt-cloudy"></i>`;
                image.src = "https://m.popkey.co/72eeda/dJOv6.gif";
              }
            } else if (response.weather[0].id === 300 ||
              response.weather[0].id === 301 ||
              response.weather[0].id === 302 ||
              response.weather[0].id === 310 ||
              response.weather[0].id === 311 ||
              response.weather[0].id === 312 ||
              response.weather[0].id === 313 ||
              response.weather[0].id === 314 ||
              response.weather[0].id === 321) {
              if (day) {
                weatherIcon.innerHTML = `<i class="wi wi-day-rain"></i>`;
                image.src = "https://media.giphy.com/media/QPsEnRasf0Vfa/giphy.gif";
              } else {
                weatherIcon.innerHTML = `<i class="wi wi-night-rain"></i>`;
                image.src = "https://media.giphy.com/media/QPsEnRasf0Vfa/giphy.gif";
              }
            }
            //next 500+


            //temperature
            const tEmp = document.querySelector(".temp");
            tEmp.innerHTML = ` <h1> ${Math.round(response.main.temp)} &#8451;</h1>`;
            //Weather condition
            const condition = document.querySelector(".weatherCondition");
            condition.innerHTML =
              `<h1>${response.weather[0].main}</h1>`;
            //Sunrise time
            const sunrise = document.querySelector(".sunrise");
            sunrise.innerHTML = `<div><p><i class="wi wi-sunrise"></br>Sunrise</br> ${timeConverter(response.sys.sunrise)}</p></div>`;
            //Sunset time
            const sunset = document.querySelector(".sunset");
            sunset.innerHTML = `<div><p><i class="wi wi-sunset"></br>Sunset</br> ${timeConverter(response.sys.sunset)}</p></div>`;
            //Atmospheric pressure
            const pressure = document.querySelector(".pressure");
            pressure.innerHTML = `<div><p><i class="wi wi-barometer"></br>Atmospheric pressure</br> ${response.main.pressure}</p></div>`;
            //Humiditi
            const humidity = document.querySelector(".humidity");
            humidity.innerHTML = `<div><p><i class="wi wi-humidity"></br>Humidity</br> ${response.main.humidity}%</p></div>`;
            //Wind
            const wind = document.querySelector(".wind");
            wind.innerHTML = `<div><p><i class="wi wi-strong-wind"></br>Wind</br> ${response.wind.speed}  mph</p></div>`;




          } else {
            console.error(xhr.statusText);
          }
        }
      };
      xhr.onerror = function(e) {
        console.error(xhr.statusText);
      };
      xhr.send(null);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }

};


function timeConverter(UNIX_timestamp) {
  const a = new Date(UNIX_timestamp * 1000);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let hour = a.getHours();
  if (hour < 10) {
    hour = "0" + a.getHours();
  }
  let min = a.getMinutes();
  if (min < 10) {
    min = "0" + a.getMinutes();
  }
  let sec = a.getSeconds();
  if (sec < 10) {
    sec = "0" + a.getSeconds();
  }
  let time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
}