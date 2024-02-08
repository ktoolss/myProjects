import axios from 'axios';

const API_URL = 'http://api.openweathermap.org/data/2.5/weather'; // Replace with your weather API endpoint
const API_KEY = 'your_key'; // Replace with your actual API key

export const fetchWeatherData = async (city) => {
    try {
        const response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};
