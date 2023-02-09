

let city = ''
const APIkey = '70126ef86ab9fc4f2eea754dbbaf84a3';
let queryURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + APIkey;


let callResults;

let day;

let tempEvals = {
    hot: 30,
    mild: 20,
    cold: 10
}

const cities = {
    London : {
        lat: 3,
        lon: 2
    },
    Berlin : {
        lat: 3,
        lon: 2
    },
    Paris : {
        lat: 3,
        lon: 2
    },
    Dublin : {
        lat: 3,
        lon: 2
    },
    Milan : {
        lat: 3,
        lon: 2
    },
    Madrid : {
        lat: 3,
        lon: 2
    }
}

let searchedCities = {};

var buttonquery = document.querySelectorAll(".btn");
var buttons = Array.prototype.slice.call(buttonquery).map(function(element){
    return element
});

var weatherCardQuery = document.querySelectorAll(".weatherCard");
var weatherCards = Array.prototype.slice.call(weatherCardQuery).map(function(element){
    return element
});



function Call(){
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + APIkey,
        method: 'GET'
    }).then(function(response){
        console.log(response);
        callResults = response;
        update();
    })
}

function getTime(){
    day = moment();
    console.log(day._d);
    $('#date').text(day._d);
}

function setWeatherIcon(){

}

function update(){
    $('.icon').text(callResults.city.name);
    for(let i = 0; i < weatherCards.length; i++){
        weatherCards[i].querySelector('.temp').innerHTML = 'TEMP : ' + callResults.list[i + 1].main.temp;
        weatherCards[i].querySelector('.wind').innerHTML = 'WIND SPEED : ' + callResults.list[i + 1].wind.speed;
        weatherCards[i].querySelector('.humidity').innerHTML = 'HUMIDITY : ' + callResults.list[i + 1].main.humidity;
        $('#titleTemp').text('Temp: ' + callResults.list[0].main.temp);
        $('#titleWind').text('Wind: ' + callResults.list[0].wind.speed);
        $('#titleHumidity').text('Humidity: ' + callResults.list[0].main.humidity);
    }
}

function init(){
    getTime();
    Call();

    $('.searchBtn').on('click', function(){
        let myCity = $('#citySearch').val();
        toString(myCity);
        city = myCity;
        console.log(city);
        Call();
    })

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(){
            let btnCity = buttons[i].innerHTML;
            city = btnCity;
            console.log(city);
            Call();
        })

    }

}

init();