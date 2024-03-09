const inputBox = document.querySelector('.input-box')
const searchBtn = document.getElementById('searchBtn')
const weatherImg = document.querySelector('.weatherImg')
const temperature = document.querySelector('.temperature')
const humidity = document.getElementById('humidity')
const description = document.querySelector('.description')
const windSpeed = document.querySelector('.wind-speed')
const loactionNotFound = document.querySelector('.loactionNotFound');
const displayBody = document.querySelector('.displayBody')

async function checkWeather(city){
    const apiKey = "9f9cee80e9fbf1b03c3bf8b4eded1dc8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    const weatherData = await fetch(`${url}`).then(response => response.json())
    if(weatherData.cod === "404"){
        displayBody.style.display = 'none'
        loactionNotFound.style.display = "flex"
    }
    temperature.innerHTML = `${Math.round(weatherData.main.temp - 273.15)}°C`
    windSpeed.innerHTML = `${(weatherData.wind.speed)}Km/H`
    description.innerHTML = `${weatherData.weather[0].description}`
    humidity.innerHTML = `${weatherData.main.humidity}%`

    switch (weatherData.weather[0].main){
        case "Clouds":
            weatherImg.src = "icone-image/cloud.png"; 
            break;
        case "Clear": 
            weatherImg.src = "icone-image/clear.png"; 
            break;
        case "Rain": 
            weatherImg.src = "icone-image/rain.png"; 
            break;
        case "Mist": 
            weatherImg.src = "icone-image/mist.png"; 
            break;
        case "Snow": 
            weatherImg.src = "icone-image/snow.png";
            break
    }
}
searchBtn.addEventListener('click' , function(){
    checkWeather(inputBox.value)
    loactionNotFound.style.display = "none"
    displayBody.style.display = "block"
})