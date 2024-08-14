const weatherContainer = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const APP_KEY = "3d8b4313c8bf8c13a5becc3e810bec61";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APP_KEY}&units=metric`;
    //console.log(URL);
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            //console.log(data.name, data.weather[0].main);
            weatherContainer.innerHTML = `${data.weather[0].main} / ${data.main.temp}`;
            city.innerHTML = data.name;
        });
}

function onGeoError() {
    alert("can't find you");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);