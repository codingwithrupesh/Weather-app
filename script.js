//  document.addEventListener('DOMContentLoaded', (event) => {
//         const apiKey = "22cdfcaffeb16133a606dd23a7c7965e";
//         const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

//         async function checkWeather(city) {
//             await fetch(apiUrl + city + `&appid=${apiKey}`)
//                 .then(response => {
//                     if (response.status == 404) {
//                         document.querySelector(".error").style.display = "block";
//                         document.querySelector(".weather").style.display = "none";
//                     } else {
//                         return response.json();
//                     }
//                 })
//                 .then(data => {
//                     if (data) {

//                         document.querySelector(".city").innerHTML = data.name;
//                         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
//                         document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//                         document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

//                         if (data.weather[0].main == "Clouds") {
//                             weatherIcon.src = "image/clouds.png";
//                         } else if (data.weather[0].main == "Clear") {
//                             weatherIcon.src = "image/clear.png";
//                         } else if (data.weather[0].main == "Rain") {
//                             weatherIcon.src = "image/rain.png";
//                         } else if (data.weather[0].main == "Drizzle") {
//                             weatherIcon.src = "image/drizzle.png";
//                         } else if (data.weather[0].main == "Mist") {
//                             weatherIcon.src = "image/mist.png";
//                         } else if (data.weather[0].main == "Humidity") {
//                             weatherIcon.src = "image/humidity.png";
//                         } else if (data.weather[0].main == "Rain") {
//                             weatherIcon.src = "image/rain.png";
//                         } else if (data.weather[0].main == "Wind") {
//                             weatherIcon.src = "image/wind.png";
//                         }

//                         document.querySelector(".weather").style.display = "block";
//                         document.querySelector(".error").style.display = "none";

//                     }
//                 })
//                 .catch(error => console.error('Error:', error));
//         }
//         const searchBtn = document.querySelector(".search button");
//         const searchBox = document.querySelector(".search input");
//         const weatherIcon = document.querySelector(".weather-icons");

//         searchBtn.addEventListener("click", () => {
//             checkWeather(searchBox.value);
//         })

//     });
document.addEventListener('DOMContentLoaded', async () => {
    const [apiKey, apiUrl] = ["22cdfcaffeb16133a606dd23a7c7965e", "https://api.openweathermap.org/data/2.5/weather?units=metric&q="];
    const [searchBtn, searchBox, weatherIcon] = [".search button", ".search input", ".weather-icons"].map(s => document.querySelector(s));
    const weather = { "Clouds": "clouds.png", "Clear": "clear.png", "Rain": "rain.png", "Drizzle": "drizzle.png", "Mist": "mist.png", "Humidity": "humidity.png", "Wind": "wind.png" };

    async function checkWeather(city) {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        } else {
            const data = await response.json();
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
            weatherIcon.src = "image/" + (weather[data.weather[0].main] || "clear.png");
            document.querySelector(".weather").style.display = "block";
            document.querySelector(".error").style.display = "none";
        }
    }

    searchBtn.addEventListener("click", () => checkWeather(searchBox.value));
});
