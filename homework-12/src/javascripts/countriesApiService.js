const BASE_URL = 'https://restcountries.com/v2/name/';

export default class CountriesApiService {
  constructor() {
    this.searchQuery = '';
  }

  fetchCountries() {
    const url = `${BASE_URL}${this.searchQuery}`;
    return fetch(url).then(r => r.json());
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
