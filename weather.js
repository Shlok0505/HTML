const locationInput = document.getElementById('location');
const getWeatherButton = document.getElementById('get-weather');
const weatherDataDiv = document.getElementById('weather-data');

getWeatherButton.addEventListener('click', async () => {
  const location = locationInput.value;
  const apiKey = 'YOUR_API_KEY_HERE';
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiURL);
  const data = await response.json();

  const weatherData = `
    <h2>Weather in ${data.name}</h2>
    <p>Temperature: ${data.main.temp}°C</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Weather: ${data.weather[0].description}</p>
  `;

  weatherDataDiv.innerHTML = weatherData;
});