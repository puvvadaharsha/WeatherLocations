class WeatherHelper{
    constructor(){
        this.apiKey = new API().getKey();
    }
    async getWeather(place){
        let url = '';
        if(isFinite(place)){
            // Zipcode given
            url = `https://api.openweathermap.org/data/2.5/weather?zip=${place}&appid=${this.apiKey}&units=imperial`;
            console.log(url);
            try{
                const response = await fetch(url);
                const jsonData = await response.json(); 
                console.log(jsonData);   
            } catch(e){
                console.log(e);
            }

        } else{
            // place name given make call based on that
            // api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
        }

    }
}


/*
// icons
http://openweathermap.org/img/wn/10d@2x.png
*/