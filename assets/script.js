

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
    for(let i = 0; i < weatherCards.length; i++){
        weatherCards[i].querySelector('.temp').innerHTML = 'TEMP : ' + callResults.list[i].main.temp;
        weatherCards[i].querySelector('.wind').innerHTML = 'WIND SPEED : ' + callResults.list[i].wind.speed;
        weatherCards[i].querySelector('.humidity').innerHTML = 'HUMIDITY : ' + callResults.list[i].main.humidity;
    }
}

function init(){
    getTime();
    Call();

    $('.searchBtn').on('click', function(){
        myCity = $('#citySearch').val();
        toString(myCity);
        city = myCity;
        console.log(city);
        Call();
    })
}

init();