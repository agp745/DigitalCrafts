const forecast = document.querySelector('.weatherInfo')
const searchedForecast = document.querySelector('.searched')
const city = document.querySelector('#citySearch')
const searchButton = document.querySelector('#search')
    
function showWeather(position) {
    let lat = position.coords.latitude
    let lon = position.coords.longitude

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=feeb1e15933c3850daf212f6801a413c&units=imperial`)
    .then(response => response.json())
    .then(info => {
    const currWeather = `
        <h1 class="city">${info.name}</h1>
        <div class="min">Min Temp: ${info.main.temp_max}F</div>
        <div class="max">Max Temp: ${info.main.temp_max}F</div>
        <div class="pressure">Pressure: ${info.main.pressure}</div>
    `
    forecast.innerHTML += currWeather
    })
}

function citySearched(){

    const cityWeather = city.value

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityWeather}&appid=feeb1e15933c3850daf212f6801a413c&units=imperial`)
    .then(response => response.json())
    .then(info => {
    console.log(info)
    const currWeather = `
        <h1 class="city">${info.name}</h1>
        <div class="min">Min Temp: ${info.main.temp_max}F</div>
        <div class="max">Max Temp: ${info.main.temp_max}F</div>
        <div class="pressure">Pressure: ${info.main.pressure}</div>
    `
    searchedForecast.innerHTML += currWeather
    })

}

function failureCallback() {
    window.alert('Cannot fetch your current weather information')
}

navigator.geolocation.getCurrentPosition(showWeather, failureCallback)

searchButton.addEventListener('click', citySearched)