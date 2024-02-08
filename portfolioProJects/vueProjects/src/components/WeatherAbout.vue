<template>
    <div class="weather-about">
        <h2>About Clean Weather</h2>
        <p>This weather app provides up-to-date weather information and maps utilizing the openweathermap API.</p>
        <p>Stay up to date for whatever weather your day may bring.</p>
        <img src="../assets/hurricane.jpg" alt="Description of image" class="about-image">
        <img src="../assets/lightning.jpg" alt="Description of image" class="about-image">
        <img src="../assets/snow.jpg" alt="Description of image" class="about-image">
        <!-- You can add more images or content here -->
    </div>
</template>

<script>
export default {
    name: 'WeatherAbout'
}
</script>

<style scoped>
    .weather-about {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
    }

    .weather-about h2 {
        margin-bottom: 20px;
    }

    .weather-about p {
        margin-bottom: 20px;
        line-height: 1.6;
    }

    .about-image {
        max-width: 31%;
        height: 376px;
        object-fit: cover;
        border-radius: 10px; /* Optional: for rounded corners */
        margin-right: 5px;
    }

    .weather-about img:last-child {
        margin-right: 0px;
    }
</style>
