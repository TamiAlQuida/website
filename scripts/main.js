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
            .then((data) => console.log(data));
    },
    displayWeather: function (data) {

    }
};

//https://www.youtube.com/watch?v=WZNG8UomjSI 22: 08 