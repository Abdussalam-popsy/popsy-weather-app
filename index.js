const apiKey = "bbc3a28a837eaa707caa1c9fcaf7f826";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
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
        // Handle other errors, e.g., network issues
    }
}

function handleSearch() {
    checkWeather(searchBox.value);
}

// Listen for search button click
searchBtn.addEventListener('click', handleSearch);

// Listen for "keydown" event on the searchBox input
searchBox.addEventListener('keydown', (event) => {
    // Check if the pressed key is "Enter" (key code 13)
    if (event.keyCode === 13) {
        handleSearch();
    }
});

// Initial search for New York
checkWeather("New York");
