/*const API_KEY = process.env.API_KEY_OPEN_WEATHER;*/

let weather = {
  apiKey: "db72b8114fbd9c9d4954d31f16950834",
  /*apiKey: API_KEY,*/
  /*apiKey: process.env.API_KEY,*/
  fetchWeather: function (city) {
    fetch(
       "https://api.openweathermap.org/data/2.5/weather?q="
       + city
       + "&units=metric&appid="
       + this.apiKey
    )
      .then((response) => response.json())
      /*step after was .then((data) => console.log(data))*/
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    /*console.log(name, icon, description, temp, humidity, speed)*/
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".description").innerText = description;
    document.querySelector(".humidity").innerText = humidity + " %";
    document.querySelector(".wind").innerText = speed + " m/s";
    document.body.style.backgroundImage = "url('https://source.unsplash.com/random/? " + name + "&1')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search_bar").value);
  }
};

document.querySelector(".search_button").addEventListener("click", function () {
  weather.search();
});

document.querySelector(".search_bar").addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weather.search();
  }
});

/*require('dotenv').config();
console.log(process.env.API_KEY);*/

//https://www.youtube.com/watch?v=WZNG8UomjSI