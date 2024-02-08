<template>
    <div class="weather-component">
        <h1 class="header-margin">City Weather Search</h1>
        <div class="input-group mb-3">
        <input v-model="city" class="form-control" placeholder="Enter city name">
        <button @click="fetchWeather" class="btn btn-primary">Get Weather</button>
        </div>
        <WeatherCard
            v-if="weatherData"
            :weatherData="weatherData"
            :tempUnit="tempUnit"
            @toggle-unit="toggleTempUnit" />
    </div>
</template>

<script>
import WeatherCard from './WeatherCard.vue';
import { fetchWeatherData } from '../weatherService';

export default {
    components: {
        WeatherCard
    },
    data() {
        return {
        city: '',
        weatherData: null,
        tempUnit: 'K'
        };
    },
    methods: {
        async fetchWeather() {
        this.weatherData = await fetchWeatherData(this.city);
        },
        toggleTempUnit() {
        if (this.tempUnit === 'K') {
            this.tempUnit = 'C';
        } else if (this.tempUnit === 'C') {
            this.tempUnit = 'F';
        } else {
            this.tempUnit = 'K';
        }
        }
    }
}
</script>

<style scoped>
    .weather-component {
        text-align: center;
        margin: 20px auto;
        max-width: 500px;
    }

    .input-group {
        margin-bottom: 20px;
    }

    .header-margin{
        margin-top:60px;
        margin-bottom:60px;
    }
</style>
