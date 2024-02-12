import Controller from '@ember/controller';

export default class CountriesController extends Controller {
    queryParams = ['countryName'];
    countryName = '';
}
