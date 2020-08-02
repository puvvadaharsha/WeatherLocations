# WeatherLocations
 This is a simple app that uses OpenWeather's API to get weather in multiple locations.

### Languages Used:
HTML, CSS, Javascript

### To run: 
1. Get an API key by signing up on OpenWeather API: https://openweathermap.org/api
2. Create a file called "API.js" and place it into the WeatherLocations Directory and add your API key with the following code :

```javascript
class API{
    constructor(){
        this.apiKey = 'PUT_YOUR_API_KEY_HERE';
    }
    getKey(){
        return this.apiKey;
    }
}
```

3. Delete the .gitignore file
4. Launch in browser and run