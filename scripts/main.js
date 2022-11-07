let weather = {
    apiKey: "9b3c2b3d48ef11aa93a76ef5db38bde6",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
        )
            .then((response) => response.json())
            .then((data) => console.log(data));
    },
};

https://www.youtube.com/watch?v=WZNG8UomjSI 20:29