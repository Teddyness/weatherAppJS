const apiKey = "6d0c33fe2b5e6705863736556645b81a";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind");
const temperature = document.getElementById('temp');
const cityName = document.getElementById('city');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

const checkWeather = async (city) => {
    try {
        humidity.innerText = 'Fetching info';
        windSpeed.innerText = 'Fetching info';
        temperature.innerText = 'Fetching info';
        cityName.innerText = 'Fetching info';
        const response = await fetch(apiURL + city+ `&appid=${apiKey}`);
        let data = await response.json();
        console.log(data);
        humidity.innerText = data.main.humidity+'%';
        windSpeed.innerText = data.wind.speed+' km/hr';
        temperature.innerText = Math.round(data.main.temp) +'°C';
        cityName.innerText = data.name;

        let condition = data.weather[0].main.toLowerCase(); // Get weather condition (e.g., "rain", "clear")
        weatherIcon.src = `images/${condition}.png`;
    }
    catch (error) {
        console.log(error);
    }

}
let cityValue;
searchBtn.addEventListener('click', ()=>{
    cityValue = document.querySelector('.search input').value;
    checkWeather(cityValue);
})

