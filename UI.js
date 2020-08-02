class UI{
    static displayStatus(message, className){
        this.clearStatus();
        const status = document.querySelector('.statusMessage');
        status.textContent = message;
        status.classList.add(className);
        this.clearInput()
        setTimeout(()=>{
            this.clearStatus();
        }, 3000);
    }

    static clearStatus(){
        const status = document.querySelector('.statusMessage');
        status.textContent = '';
        status.classList.remove('success');
        status.classList.remove('failure');
    }

    static clearInput(){
        document.querySelector('#inputCityName').value = '';
    }

    static createCard(jsonData){
        // get reference for the element to create card
        const grid = document.querySelector('.grid');

        // Destructuring JSON to get the important attributes
        let place, country, logoID, temp, minTemp, maxTemp, feelsLike, description;

        [place, country, logoID, temp, minTemp, maxTemp, feelsLike, description] = [jsonData.name, jsonData.sys.country, jsonData.weather[0].icon, jsonData.main.temp,jsonData.main.temp_min, jsonData.main.temp_max, jsonData.main.feels_like, jsonData.weather[0].description]

        let div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
            <h2 id="cardHeader">${place}, ${country}</h2>
            <div id="descriptionBox">
                <h3 id="description">${description}</h3>
                <img id="weatherImage" src="http://openweathermap.org/img/wn/${logoID}@2x.png" alt="${description}">
            </div>
            <div class='tempData'>
                <h5>${minTemp}°F</h5>
                <h3 id="currentTemp">${temp}°F</h3>
                <h5>${maxTemp}°F</h5>
                <h5>Min Temp</h5>
                <h4 id="currentTemp">Current Temp</h5>
                <h5>Max Temp</h5>
            </div>
            <h5 id="footer">Feels like: ${feelsLike}°F</h5>
        `;
        // add the new card element to the grid
        grid.appendChild(div);
    }
}