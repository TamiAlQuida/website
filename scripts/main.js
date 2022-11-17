let weather = {
  apiKey: "db72b8114fbd9c9d4954d31f16950834",
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
    console.log(name, icon, description, temp, humidity, speed)
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".description").innerText = description;
    document.querySelector(".humidity").innerText = humidity + " %";
    document.querySelector(".wind").innerText = speed + " m/s";
  } 
};

//https://www.youtube.com/watch?v=WZNG8UomjSI 26: 16 