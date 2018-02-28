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
            tEmp.textContent = Math.round(response.main.temp) + "&#8451";
            var condition = document.querySelector(".weatherCondition");
            condition.textContent = response.weather[0].main;
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