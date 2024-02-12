import Service from '@ember/service';
import fetch from 'fetch';

export default class ApiService extends Service {
    async getCountryData(countryName) {
        let response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }

    async getAirQualityData(city) {
        // Replace with the correct API endpoint and parameters
        let response = await fetch(`https://api.example.com/airquality?city=${city}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }
}
