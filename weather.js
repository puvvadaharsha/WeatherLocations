class WeatherHelper{
    constructor(){
        this.apiKey = new API().getKey();
    }
    async getWeather(place){
        let url = '';

        // Create API Call URL
        if(isFinite(place)){
            // zipcode given
            url = `https://api.openweathermap.org/data/2.5/weather?zip=${place}&appid=${this.apiKey}&units=imperial`;
        }else{
            // place name given
            url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${this.apiKey}&units=imperial`;
        }

        // API call to OpenWeatherAPI
        try{
            const response = await fetch(url);
            const jsonData = await response.json(); 
            
            // If 404 Error
            if(jsonData.hasOwnProperty('message') && jsonData.message === 'city not found'){
                UI.displayStatus(`Invalid Location. Please try again.`,'failure');
            } else{
                // Successfully got data
                UI.displayStatus(`${place} added.`,'success'); 
                UI.createCard(jsonData); 
            }
        } catch(e){
            // catch any internal errors
            UI.displayStatus(`Fetch data failed.`,'failure');  
            console.log(e); 
        }
    }
}