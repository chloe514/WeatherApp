//adding event listener for form submission
document.getElementById('zipForm').addEventListener('submit', function(event) {
    event.preventDefault();
    //zip code input
    const zip = document.getElementById('zip').value.trim();
//validate zip code input
    if (!zip) {
        alert('Please enter a valid zip code.');
        return;
    }
//api key from openweathermap
    const apiKey = '0b6d76197285696915e9154ac63d16bf';
    //api for weather based on zip code
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&units=imperial&appid=${apiKey}`;

    //fetch weather app data
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            displayWeatherData(data);
        })
        .catch(error => {
            console.error('There was a problem fetching the weather data:', error);
            alert('There was an error fetching the weather data. Please try again.');
        });
});
//function to display weather data
function displayWeatherData(data) {
    const cityElement = document.getElementById('city');
    const temperatureElement = document.getElementById('temperature');
    const conditionsElement = document.getElementById('conditions');
    const tempHiLoElement = document.getElementById('temp-hi-lo');
    const dateElement = document.getElementById('date');
//update html content with weather data
    cityElement.textContent = data.name;
    temperatureElement.textContent = data.main.temp.toFixed(1);
    conditionsElement.textContent = data.weather[0].description;
    tempHiLoElement.textContent = `${data.main.temp_max.toFixed(1)} / ${data.main.temp_min.toFixed(1)}`;
    dateElement.textContent = new Date().toLocaleDateString();
}











