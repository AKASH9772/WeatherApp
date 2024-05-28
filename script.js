async function fetchWeather() {
    const city = document.getElementById('city-input').value;
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    const weatherInfo = document.getElementById('weather-info');
    weatherInfo.innerHTML = '<p class="loading">Loading...</p>';

    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '029a588587msheb4b3a8dbbd8999p1021c0jsn4ca5ddbaba3b',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        weatherInfo.innerHTML = `
            <p>Temperature: ${result.temp} °C</p>
            <p>Feels Like: ${result.feels_like} °C</p>
            <p>Humidity: ${result.humidity} %</p>
            <p>Wind Speed: ${result.wind_speed} m/s</p>
        `;
    } catch (error) {
        weatherInfo.innerHTML = `<p class="error">Error fetching weather data: ${error}</p>`;
    }
}