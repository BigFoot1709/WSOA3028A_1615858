fetch("https://api.openweathermap.org/data/2.5/weather?id=993800&appid=0d89da3efce536b51b38bbfc8cab7c05")
    .then((r) => r.json())
    .then((weather) => {
        console.log(weather);
        handleWeatherDetails(weather);
    });

const handleWeatherDetails = (WeatherDetails) => {

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    document.getElementById("today_date").innerText = String(dd + '/' + mm + '/' + yyyy);

    const tempC = Math.round((WeatherDetails.main.temp - 273.15) * 10) / 10;
    document.getElementById("weather_temp").innerText = String(tempC) + "°C";

    const tempmin = Math.round((WeatherDetails.main.temp_min - 273.15) * 10) / 10;
    document.getElementById("weather_min").innerText = "Min: " + String(tempmin) + "°C";
    const tempmax = Math.round((WeatherDetails.main.temp_max - 273.15) * 10) / 10;
    document.getElementById("weather_max").innerText = "Max: " + String(tempmax) + "°C";

    const tempfeel = Math.round((WeatherDetails.main.feels_like - 273.15) * 10) / 10;
    document.getElementById("weather_temp_feel").innerText = "(Feels like: " + String(tempfeel) + "°C)";

    const humidity = WeatherDetails.main.humidity;
    document.getElementById("weather_humidity").innerText = "Humidity: " + String(humidity) + "%";

    const windspeed = WeatherDetails.wind.speed;
    document.getElementById("weather_wind").innerText = "Wind Speed: " + String(windspeed) + "m/s";

    const sunrisetime = WeatherDetails.sys.sunrise;

    var date = new Date(sunrisetime * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();

    var sunrisetimeformattedTime = hours + ':' + minutes.substr(-2) + " AM";

    document.getElementById("weather_sunrise").innerText = "Sunrise: " + String(sunrisetimeformattedTime);
    const sunsettime = WeatherDetails.sys.sunset;

    var date = new Date(sunsettime * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();

    var sunsettimeformattedTime = hours + ':' + minutes.substr(-2) + " PM";

    document.getElementById("weather_sunset").innerText = "Sunset: " + String(sunsettimeformattedTime);

}