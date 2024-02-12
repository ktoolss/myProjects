import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class AirQualityRoute extends Route {
    @service api;

    async model(params) {
        try {
            return await this.api.getAirQualityData(params.city);
        } catch (error) {
            console.error('Error fetching air quality data:', error);
        }
    }
}
