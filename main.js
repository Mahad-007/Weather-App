const apiKey = '4a2fb44c58mshc45e4e544c6146fp126e37jsn7066b96fc2aa'; // Keep this secret
const apiHost = 'weather-api167.p.rapidapi.com';

async function fetchWeather(city) {
    const url = `https://${apiHost}/api/weather/current?place=${encodeURIComponent(city)}&units=standard&lang=en&mode=json`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': apiHost,
            'Accept': 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        
        // Display the weather data
        document.getElementById('city-name').innerText = `Weather in ${city}: ${data.weather[0].description}, Temp: ${data.main.temp}°C`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById('city-name').innerText = "Failed to get weather data.";
    }
}

// Attach the function to the search button
document.getElementById('searchBtn').addEventListener('click', function() {
    const city = document.getElementById('searchInput').value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        alert("Please enter a city name.");
    }
});
