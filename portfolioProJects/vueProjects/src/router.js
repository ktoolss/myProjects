import { createRouter, createWebHistory } from 'vue-router';

import WeatherAbout from './components/WeatherAbout.vue';
import WeatherComponent from './components/WeatherComponent.vue';
import WeatherMapComponent from './components/WeatherMapComponent.vue';

const routes = [
    { path: '/', component: WeatherComponent },
    { path: '/about', component: WeatherAbout },
    { path: '/map', component: WeatherMapComponent }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
