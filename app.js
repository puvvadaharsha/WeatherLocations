
// Create UI object
let userInterface = new UI();

// Create Weather object
let weatherHelper = new WeatherHelper()

//listener on submit button
document.querySelector('.submitButton').addEventListener('click',validateInput);


function validateInput(e){
    const text = document.querySelector("#inputCityName").value;
    if(text === ""){
        userInterface.displayStatus(`Please enter a city/place Name.`,'failure');
    } else{
        userInterface.displayStatus(`${text} added.`,'success');
        weatherHelper.getWeather(text);
    }
    e.preventDefault();
}