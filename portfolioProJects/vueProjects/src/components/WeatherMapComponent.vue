<template>
  <div id="map" style="height: 500px;"></div>
</template>

<script>
import L from 'leaflet';

export default {
  mounted() {
    const map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add weather layer z, x, y
    L.tileLayer('https://maps.openweathermap.org/maps/2.0/weather/1h/TA2/0/9/9?appid=3480cc43679ccf4d9847f7afc4b6ca73', {
      maxZoom: 19,
      attribution: '© OpenWeatherMap',
      // Replace {layer} with your chosen layer, and {API_key} with your actual API key
    }).addTo(map);
  }
};
</script>
