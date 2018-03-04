const api = "https://fcc-weather-api.glitch.me/api/current?";
// let lat;
// let lon;
let urlStr = "";
const currentTime = new Date();
const day = currentTime.getHours() > 6 && currentTime.getHours() < 19;


window.onload = function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      const lat = "lat=" + position.coords.latitude;
      const lon = "lon=" + position.coords.longitude;
      urlStr += api + lat + "&" + lon;
      const xhr = new XMLHttpRequest();

      xhr.open("GET", urlStr, true);
      xhr.onload = function(e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log(xhr.responseText);
            response = JSON.parse(xhr.responseText);
            console.log("Location: " + response.name);
            //background image  init
            const body = document.getElementsByTagName('body')[0];
            //Location
            const loc = document.querySelector(".location");
            loc.innerHTML = `<h1>${response.name}</h1>`;
            //gif image
            const image = document.getElementById("image");
            if (response) {
              image.classList.remove('hidden');
            }
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
                body.style.backgroundImage = "url(https://images.unsplash.com/photo-1447829172150-e5deb8972256?ixlib=rb-0.3.5&s=b4cc51d583a941ac326750267bc57597&auto=format&fit=crop&w=1510&q=80)";
              } else {
                weatherIcon.innerHTML = `<i class="wi wi-night-alt-thunderstorm"></i>`;
                image.src = "https://media.giphy.com/media/JYEKQ8Vlb7wXu/giphy.gif";
                body.style.backgroundImage = "url(https://images.unsplash.com/photo-1447829172150-e5deb8972256?ixlib=rb-0.3.5&s=b4cc51d583a941ac326750267bc57597&auto=format&fit=crop&w=1510&q=80)";
              }
            } else if (response.weather[0].id === 801 ||
              response.weather[0].id === 802 ||
              response.weather[0].id === 803) {
              if (day) {
                weatherIcon.innerHTML = `<i class="wi wi-day-cloudy"></i>`;
                image.src = "https://m.popkey.co/72eeda/dJOv6.gif";
                body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1500835176302-48dbd01f6437?ixlib=rb-0.3.5&s=c9e859449a88b8781bfd7c91c0e143d5&auto=format&fit=crop&w=1378&q=80)';
              } else {
                weatherIcon.innerHTML = `<i class="wi wi-night-alt-cloudy"></i>`;
                image.src = "https://m.popkey.co/72eeda/dJOv6.gif";
                body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1500835176302-48dbd01f6437?ixlib=rb-0.3.5&s=c9e859449a88b8781bfd7c91c0e143d5&auto=format&fit=crop&w=1378&q=80)';
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
                body.style.backgroundImage = "url(https://images.unsplash.com/photo-1417008914239-59b898b49382?ixlib=rb-0.3.5&s=ae6ad88dc0641141b8082581dfa13bf9&auto=format&fit=crop&w=1528&q=80)";
              } else {
                weatherIcon.innerHTML = `<i class="wi wi-night-alt-rain"></i>`;
                image.src = "https://media.giphy.com/media/QPsEnRasf0Vfa/giphy.gif";
                body.style.backgroundImage = "url(https://images.unsplash.com/photo-1417008914239-59b898b49382?ixlib=rb-0.3.5&s=ae6ad88dc0641141b8082581dfa13bf9&auto=format&fit=crop&w=1528&q=80)";
              }
            } else if (response.weather[0].id === 800) {
              if (day) {
                weatherIcon.innerHTML = `<i class="wi wi-day-sunny"></i>`;
                image.src = "https://media.giphy.com/media/mcAyCOqaHFQze/giphy.gif";
                body.style.backgroundImage = "url(https://images.unsplash.com/photo-1444237236636-d7613ee9fb44?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b5a67b9c12271c419f92f1e63a751881&auto=format&fit=crop&w=1489&q=80)";
              } else {
                weatherIcon.innerHTML = `<i class="wi wi-night-clear"></i>`;
                image.src = "https://media.giphy.com/media/mcAyCOqaHFQze/giphy.gif";
                body.style.backgroundImage = "url(https://images.unsplash.com/photo-1498611291069-aa296192f1e4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=73e1c3c8903c0a04317099620721a438&auto=format&fit=crop&w=1500&q=80)";
              }
            } else if (response.weather[0].id === 500 ||
              response.weather[0].id === 501 ||
              response.weather[0].id === 502 ||
              response.weather[0].id === 503 ||
              response.weather[0].id === 504 ||
              response.weather[0].id === 511 ||
              response.weather[0].id === 520 ||
              response.weather[0].id === 521 ||
              response.weather[0].id === 522 ||
              response.weather[0].id === 531) {
              if (day) {
                weatherIcon.innerHTML = `<i class="wi wi-day-showers"></i>`;
                image.src = "https://thumbs.gfycat.com/UntriedLazyCoati-max-1mb.gif";
                body.style.backgroundImage = "url(https://images.unsplash.com/photo-1433863448220-78aaa064ff47?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=723ac0c6a3eb82eb16190fea1ad22755&auto=format&fit=crop&w=1489&q=80)";
              } else {
                weatherIcon.innerHTML = `<i class="wi wi-night-alt-showers"></i>`;
                image.src = "https://thumbs.gfycat.com/UntriedLazyCoati-max-1mb.gif";
                body.style.backgroundImage = "url(https://images.unsplash.com/photo-1433863448220-78aaa064ff47?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=723ac0c6a3eb82eb16190fea1ad22755&auto=format&fit=crop&w=1489&q=80)";
              }
            } else if (response.weather[0].id === 600 ||
              response.weather[0].id === 601 ||
              response.weather[0].id === 602 ||
              response.weather[0].id === 611 ||
              response.weather[0].id === 612 ||
              response.weather[0].id === 615 ||
              response.weather[0].id === 616 ||
              response.weather[0].id === 620 ||
              response.weather[0].id === 621 ||
              response.weather[0].id === 622) {
              if (day) {
                weatherIcon.innerHTML = `<i class="wi wi-day-snow-win"></i>`;
                image.src = "https://media.giphy.com/media/12RAfAXFH8g5LG/giphy.gif";
                body.style.backgroundImage = "url(https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4a2ecb093c96c69ec20be4729219c081&auto=format&fit=crop&w=1500&q=80)";
              } else {
                weatherIcon.innerHTML = `<i class="wi wi-night-alt-snow-wind"></i>`;
                image.src = "https://media.giphy.com/media/12RAfAXFH8g5LG/giphy.gif";
                body.style.backgroundImage = "url(https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4a2ecb093c96c69ec20be4729219c081&auto=format&fit=crop&w=1500&q=80)";
              }
            } else if (response.weather[0].id === 701 ||
              response.weather[0].id === 711 ||
              response.weather[0].id === 721 ||
              response.weather[0].id === 731 ||
              response.weather[0].id === 741 ||
              response.weather[0].id === 751 ||
              response.weather[0].id === 761 ||
              response.weather[0].id === 762 ||
              response.weather[0].id === 771 ||
              response.weather[0].id === 781) {
              if (day) {
                weatherIcon.innerHTML = `<i class="wi wi-day-fog"></i>`;
                image.src = "https://media.giphy.com/media/PznHcuHQviiti/giphy.gif";
                body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1431898542497-133ad897e05f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a936272b71bd913aba494bbd7ddd3802&auto=format&fit=crop&w=1489&q=80)';
              } else {
                weatherIcon.innerHTML = `<i class="wi wi-night-fog"></i>`;
                image.src = "https://media.giphy.com/media/PznHcuHQviiti/giphy.gif";
                body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1431898542497-133ad897e05f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a936272b71bd913aba494bbd7ddd3802&auto=format&fit=crop&w=1489&q=80)';
              }
            } else if (response.weather[0].id === 900 ||
              response.weather[0].id === 901 ||
              response.weather[0].id === 902 ||
              response.weather[0].id === 905
            ) {
              if (day) {
                weatherIcon.innerHTML = `<i class="wi wi-tornado"></i>`;
                image.src = "https://media.giphy.com/media/nUffsylZvXTXy/giphy.gif";
                body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1457528877294-b48235bdaa68?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=23776c88850b790975e42c214f781376&auto=format&fit=crop&w=1500&q=80)';
              } else {
                weatherIcon.innerHTML = `<i class="wi wi-tornado"></i>`;
                image.src = "https://media.giphy.com/media/nUffsylZvXTXy/giphy.gif";
                body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1457528877294-b48235bdaa68?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=23776c88850b790975e42c214f781376&auto=format&fit=crop&w=1500&q=80)';
              }
            } else if (response.weather[0].id === 904) {
              if (day) {
                weatherIcon.innerHTML = `<i class="wi wi-hot"></i>`;
                image.src = "https://media.giphy.com/media/Bg6z4LAg7n8nm/giphy.gif";
                body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-0.3.5&s=0bc98eac73c84dde12b079832b161409&auto=format&fit=crop&w=1510&q=80)';
              } else {
                weatherIcon.innerHTML = `<i class="wi wi-stars"></i>`;
                image.src = "https://78.media.tumblr.com/616cabce311d37c6ce25532225f265d9/tumblr_o14ra4WZph1rcc3hoo1_500.gif";
                body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1509316785289-025f5b846b35?ixlib=rb-0.3.5&s=0bc98eac73c84dde12b079832b161409&auto=format&fit=crop&w=1510&q=80)';
              }
            } else if (response.weather[0].id === 903) {
              if (day) {
                weatherIcon.innerHTML = `<i class="wi wi-snowflake-cold"></i>`;
                image.src = "https://media.giphy.com/media/VjVBsHTZQ4NHi/giphy.gif";
                body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1484448399107-a3217ec34636?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=694e3edc033b325328d9892b042aeb22&auto=format&fit=crop&w=1368&q=80)';
              } else {
                weatherIcon.innerHTML = `<i class="wi wi-snowflake-cold"></i>`;
                image.src = "https://media.giphy.com/media/sS093VkdjtDKo/giphy.gif";
                body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1484448399107-a3217ec34636?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=694e3edc033b325328d9892b042aeb22&auto=format&fit=crop&w=1368&q=80)';
              }
            } else if (response.weather[0].id === 906) {
              if (day) {
                weatherIcon.innerHTML = `<i class="wi wi-day-hail"></i>`;
                image.src = "https://media.giphy.com/media/YMPVlSoVQDJGU/giphy.gif";
                body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1511634829096-045a111727eb?ixlib=rb-0.3.5&s=ab5dbc041732c69fc19b62c7f2d6bc1f&auto=format&fit=crop&w=1491&q=80)';
              } else {
                weatherIcon.innerHTML = `<i class="wi wi-night-alt-hail"></i>`;
                image.src = "https://media.giphy.com/media/YMPVlSoVQDJGU/giphy.gif";
                body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1511634829096-045a111727eb?ixlib=rb-0.3.5&s=ab5dbc041732c69fc19b62c7f2d6bc1f&auto=format&fit=crop&w=1491&q=80)';
              }
            } else if (response.weather[0].id === 951 ||
              response.weather[0].id === 952 ||
              response.weather[0].id === 953 ||
              response.weather[0].id === 954 ||
              response.weather[0].id === 955 ||
              response.weather[0].id === 956) {
              if (day) {
                weatherIcon.innerHTML = `<i class="wi wi-windy"></i>`;
                image.src = "https://media.giphy.com/media/p5he4jDgEPeUg/giphy.gif";
                body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1466629437334-b4f6603563c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=40efa99e727c46da91270fa3e3f73634&auto=format&fit=crop&w=757&q=80)';
              } else {
                weatherIcon.innerHTML = `<i class="wi wi-windy"></i>`;
                image.src = "https://media.giphy.com/media/p5he4jDgEPeUg/giphy.gif";
                body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1466629437334-b4f6603563c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=40efa99e727c46da91270fa3e3f73634&auto=format&fit=crop&w=757&q=80)';
              }
            } else if (response.weather[0].id === 957 ||
              response.weather[0].id === 958 ||
              response.weather[0].id === 959 ||
              response.weather[0].id === 960 ||
              response.weather[0].id === 961 ||
              response.weather[0].id === 962) {
              if (day) {
                weatherIcon.innerHTML = `<i class="wi wi-strong-wind"></i>`;
                image.src = "https://media.giphy.com/media/12Ot9pYxhp0lwY/giphy.gif";
                body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1470176519524-3c2f481c8c9c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=80f1eb8013a64e7501ffda0e31059061&auto=format&fit=crop&w=1400&q=80)';
              } else {
                weatherIcon.innerHTML = `<i class="wi wi-strong-wind"></i>`;
                image.src = "https://media.giphy.com/media/12Ot9pYxhp0lwY/giphy.gif";
                body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1470176519524-3c2f481c8c9c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=80f1eb8013a64e7501ffda0e31059061&auto=format&fit=crop&w=1400&q=80)';
              }
            } else if (response.weather[0].id === 804) {
              if (day) {
                weatherIcon.innerHTML = `<i class="wi wi-cloudy
"></i>`;
                image.src = "https://media.giphy.com/media/Cn46Wi1Fvh11S/giphy.gif";
                body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1500491460312-c32fc2dbc751?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=565a9d6e3168d1eb38cf052f44df4196&auto=format&fit=crop&w=1500&q=80)';
              } else {
                weatherIcon.innerHTML = `<i class="wi wi-cloudy

"></i>`;
                image.src = "https://media.giphy.com/media/Cn46Wi1Fvh11S/giphy.gif";
                body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1500491460312-c32fc2dbc751?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=565a9d6e3168d1eb38cf052f44df4196&auto=format&fit=crop&w=1500&q=80)';
              }
            }


            //temperature
            const tEmp = document.querySelector(".temp");
            const celsius = response.main.temp;
            const farenheit = response.main.temp * 9 / 5 + 32;
            tEmp.innerHTML = ` <h1> ${celsius.toFixed(1)} <span id="celsius" class="metrics">&#8451;<span></h1>`;
            //Converting to Farenheit or Celsius
            function convertMetrics(e) {
              if (e.target.id === 'celsius') {
                tEmp.innerHTML = ` <h1> ${farenheit.toFixed(1)} <span id="farenheit" class="metrics">&#8457;<span></h1>`;
              } else {
                tEmp.innerHTML = ` <h1> ${celsius.toFixed(1)} <span id="celsius" class="metrics">&#8451;<span></h1>`;
              }
            };
            tEmp.addEventListener('click', convertMetrics);


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

function toFarenheit(a) {
  a = response.main.temp;
  let farenheit = a * 9 / 5 + 32;
  return farenheit.toFixed(1);
}