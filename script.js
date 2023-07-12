// API
let key = '07137443fb0d4835bbb62153231007';
let BASE_URL = 'http://api.weatherapi.com/v1';

// Fetch weather data
async function getWeatherData() {
    const searchCity = document.querySelector('#searchInput').value;
        fetch(`${BASE_URL}/current.json?key=${key}&q=${searchCity}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            locationInfo(response);
        })
        .catch(function(error) {
            console.log(error)
        });
}

// Fetch data for Default Values 
async function getDefData() {
    fetch(`${BASE_URL}/current.json?key=${key}&q=Fullerton`)
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        defaultValues(response);
    })
}

// Location information
function locationInfo(response) {
    const place = document.querySelector('#location');
    const temperature = document.querySelector('#temp-f');
    const wind = document.querySelector('#wind');
    const humid = document.querySelector('#humid');

    place.textContent = response.location.name;
    temperature.textContent = response.current.temp_f + ' F';
    wind.textContent = response.current.wind_mph + ' mph';
    humid.textContent = 'Humidity: '+ response.current.humidity;
}

// Setting HTML to default values from Javascript
function defaultValues(response) {
    const defPlace = document.querySelector('#location');
    const defTemp = document.querySelector('#temp-f');
    const defWind = document.querySelector('#wind');
    const defHumid = document.querySelector('#humid');

    defPlace.textContent = response.location.name;
    defTemp.textContent = response.current.temp_f + ' F';
    defWind.textContent = response.current.wind_mph + ' mph';
    defHumid.textContent = 'Humidity: ' + response.current.humidity;
}

getDefData();