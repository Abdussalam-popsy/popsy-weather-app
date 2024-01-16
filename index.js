const apiKey = "bbc3a28a837eaa707caa1c9fcaf7f826";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");


async function checkWeather(city){
    try {
        const data = await fetch(apiUrl + city + `&appid=${apiKey}`).then(res => res.json());

        console.log(data);
        // Update content based on weather data
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "℃";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}
searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
})

checkWeather("New York");