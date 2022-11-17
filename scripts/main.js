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
        .then((data) => this.displayWeather(data));
        /*step before was .then((data) => console.log(data));*/
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather;
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, temp, humidity, speed)
  } 
};

//https://www.youtube.com/watch?v=WZNG8UomjSI 22: 08 