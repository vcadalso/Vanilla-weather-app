function displayTemperature(response) {
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let description = document.querySelector("#description");
let humidityElement = document.querySelector ("#humidity");
let windElement = document.querySelector ("#wind");
temperatureElement.innerHTML= Math.round (response.data.main.temp);
cityElement.innerHTML = response.data.name;
descriptionElement.innerHTML = response.data.weather[0].description;
humidityElement.innerHTML = response.data.main.humidity;
windElement.innerHTML = Math.round (response.data.wind.speed);
}
let apiKey = "0300e14043fb59596a12t1bb17o183cf";
let apiUrl = "https://api.shecodes.io/weather/v1/current?query={Miami}&key={apiKey}&units=metric";

axios.get(apiUrl).then(displayTemperature);