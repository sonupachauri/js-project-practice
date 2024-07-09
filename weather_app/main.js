

const apiKey="03498823c816602bdaf775ad52a6bc0c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric";

async function checkWeather(city) {

    const response = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${city}`);

    var data = await response.json();

    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + " *C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + " %";
    document.querySelector('.wind').innerHTML = data.wind.speed + " km/hr"; 
    
}
checkWeather();