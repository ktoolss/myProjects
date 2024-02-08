<template>
    <div class="card">
        <div class="card-body">
        <h5 class="card-title">{{ weatherData.name }}, {{ weatherData.sys.country }}</h5>
        <div class="temp-container card-text">
            <p class="card-text temp-text">Temperature: {{ convertTemperature(weatherData.main.temp) }} {{ tempUnit }}</p>
            <button @click="toggleTempUnit" class="btn btn-primary temp-toggle-button">Change Unit</button>
        </div>
        <p class="card-text">Weather: {{ weatherData.weather[0].description }}</p>
        <p class="card-text">Humidity: {{ weatherData.main.humidity }}%</p>
        <p class="card-text">Pressure: {{ weatherData.main.pressure }} hPa</p>
        <p class="card-text">Wind Speed: {{ weatherData.wind.speed }} m/s</p>
        <p class="card-text">Cloudiness: {{ weatherData.clouds.all }}%</p>
        <p class="card-text">Sunrise: {{ new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString() }}</p>
        <p class="card-text">Sunset: {{ new Date(weatherData.sys.sunset * 1000).toLocaleTimeString() }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['weatherData', 'tempUnit'],
    emits: ['toggle-unit'],
    methods: {
        convertTemperature(temp) {
            if (this.tempUnit === 'C') {
                return (temp - 273.15).toFixed(2); // Kelvin to Celsius
            } else if (this.tempUnit === 'F') {
                return ((temp - 273.15) * 9/5 + 32).toFixed(2); // Kelvin to Fahrenheit
            } else {
                return temp.toFixed(2); // Kelvin
            }
        },
        toggleTempUnit() {
            this.$emit('toggle-unit'); // Emit the event
        }
    }
}
</script>

<style scoped>
    .card {
        margin: 0 auto;
        max-width: 500px;
    }
    .temp-container {
        display: flex;
        align-items: center;
        justify-content: start;
    }

    .temp-text {
        flex: 1;
        margin-left: 100px;
    }

    .temp-toggle-button {
        margin-bottom: 10px;
        padding: 0.375rem 0.75rem; /* Bootstrap's default button padding */
    }
</style>
