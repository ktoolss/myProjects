import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class CountriesRoute extends Route {
    @service api;

    model(params) {
        if (params.countryName) {
            return this.api.getCountryData(params.countryName);
        }
        return null;
    }

    @action
    searchCountry(countryName) {
        this.refresh({ queryParams: { countryName: countryName } });
    }
}
