window.addEventListener('load', function() {

    fetch("https://handlers.education.launchcode.org/static/weather.json").then(function(response) {
        response.json().then(function(jsonResponse){  
            let myWeatherDiv = document.getElementById('weather-output');
            myWeatherDiv.innerHTML = `
            </h3>${jsonResponse.status}<h3>
            <p>Temp: ${jsonResponse.temp} F</p>
            <p>Low/High: ${jsonResponse.tempMin} F / ${jsonResponse.tempMax} F</p>
            <p>Wind Speed: ${jsonResponse.windSpeed} mph</p>`
        });
        
    });

});