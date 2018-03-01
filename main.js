var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat;
var lon;
var urlStr = "";
var response;

window.onload = function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      urlStr += api + lat + "&" + lon;
      var xhr = new XMLHttpRequest();

      xhr.open("GET", urlStr, true);
      xhr.onload = function(e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log(xhr.responseText);
            response = JSON.parse(xhr.responseText);
            console.log("Location: " + response.name);

            var loc = document.querySelector(".location");
            loc.textContent = response.name;
            var tEmp = document.querySelector(".temp");
            tEmp.innerHTML = `<h2>${Math.round(response.main.temp)}&#8451;</h2>`
            var condition = document.querySelector(".weatherCondition");
            condition.textContent = response.weather[0].main;
            var sunrise = document.querySelector(".sunrise");
            sunrise.innerHTML = `<div><p><i class="wi wi-sunrise"></br>Sunrise</br> ${timeConverter(response.sys.sunrise)}</p></div>`;

            var sunset = document.querySelector(".sunset");
            sunset.innerHTML = `<div><p><i class="wi wi-sunset"></br>Sunset</br> ${timeConverter(response.sys.sunset)}</p></div>`;

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
  var a = new Date(UNIX_timestamp * 1000);
  var months = [
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
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  if (hour < 10) {
    hour = "0" + a.getHours();
  }
  var min = a.getMinutes();
  if (min < 10) {
    min = "0" + a.getMinutes();
  }
  var sec = a.getSeconds();
  if (sec < 10) {
    sec = "0" + a.getSeconds();
  }
  var time =
    date + " " + month + " " + year + " " + hour + ":" + min + ":" + sec;
  return time;
}