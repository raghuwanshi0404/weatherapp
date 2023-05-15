
let form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event && event.preventDefault();
    console.log(form[0].value);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form[0].value}&appid=d42251a0a9d8f7e6b274dd1ecf3c1edc&units=metric`)
        .then(function(resp){
            return resp.json();
        })
        .then(function(resp){
            console.log(resp);
           document.querySelector(".city").innerHTML = resp.name;
          // console.log(document.querySelector(".city").innerHTML = resp.name)
           document.querySelector(".temp").innerHTML = resp.main.temp + "°C";
           document.querySelector(".humidity").innerHTML 
                = `<div>${resp.main.humidity} %</div>` +
                    `<div>Humidity</div>` ;
           document.querySelector(".wind").innerHTML 
                =  `<div>${resp.wind.speed} "km/h"</div>` + 
                   `<div>wind speed</div>`;
                   
let weatherIcon =    document.querySelector(".weather-icon");

        if(resp.weather[0].main=="Clear") {
            weatherIcon.src = "images/clear.jfif"

        }
        else if(resp.weather[0].main =="Rain"){
            weatherIcon.src = "images/rain.jfif"
        } 
        else if(resp.weather[0].main =="Drizzle"){
            weatherIcon.src = "images/drizzle.jfif"
        } 
        else if(resp.weather[0].main =="Clouds"){
            weatherIcon.src = "images/cloudy.jfif"
        }
        else if(resp.weather[0].main =="Mist"){
            weatherIcon.src = "images/mist.png"
        }       
            

        })
})
