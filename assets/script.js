
let latitude = '51.50075';
let longitude = '-0.12120';

const APIkey = '70126ef86ab9fc4f2eea754dbbaf84a3';
const queryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + APIkey;


function exampleCall(){
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){
        console.log(response);
    })
}

exampleCall();