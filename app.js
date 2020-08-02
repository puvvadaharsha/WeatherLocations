
// Create Weather object
let weatherHelper = new WeatherHelper()

//listener on submit button
document.querySelector('.submitButton').addEventListener('click',validateInput);


function validateInput(e){
    const text = document.querySelector("#inputCityName").value;
    if(text === ""){
        UI.displayStatus(`Please enter a city/place Name.`,'failure');
    } else{
        weatherHelper.getWeather(text);
    }
    e.preventDefault();
}