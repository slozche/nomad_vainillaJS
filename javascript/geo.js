const API_KEY = '42d5f4a1d475081f1f855d47fcbb65e2'

function getGeoSucess(position){
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
        document.querySelector('#weather span:first-child').innerText = `${data.weather[0].main} / ${parseInt(data.main.temp)}`
        document.querySelector('#weather span:last-child').innerText = data.name
    })
}
function getGeoError(){
    alert("Can't find you. No weater for you")
}

navigator.geolocation.getCurrentPosition(getGeoSucess, getGeoError)