
let latitude = '51.50075';
let longitude = '-0.12120';

const APIkey = '70126ef86ab9fc4f2eea754dbbaf84a3';
const queryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + APIkey;

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
    },
    Edinburgh : {
        lat: 3,
        lon: 2
    },
    

}

let searchedCities = {};



function exampleCall(){
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){
        console.log(response);
    })
}

function getTime(){
    day = moment();
    console.log(day._d);
}

function setWeatherIcon(){

}

getTime();

exampleCall();