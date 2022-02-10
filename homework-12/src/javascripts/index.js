// Main imports
import '../sass/main.scss';
import notice from './notifications';
import fetchCountries from './countriesApiService';
import countryListTpl from '../templates/countries-list.hbs';
import countryTpl from '../templates/country.hbs';
import debounce from 'lodash.debounce';

// Main code
const refs = {
  searchQuery: document.querySelector('[data-action="query"]'),
  searchResult: document.querySelector('[data-action="result"]'),
};
refs.searchQuery.addEventListener('input', debounce(onSearch, 500));

async function onSearch(e) {
  if (e.target.value) {
    const response = await fetchCountries(e.target.value);
    processingRequest(response);
  } else clearSearchResult();
}

function processingRequest(response) {
  if (response.status === 404) {
    clearSearchResult();
    notice('error');
  } else if (response.length > 10) {
    clearSearchResult();
    notice('info');
  } else {
    renderMarkup(response);
    notice('success', response);
  }
}

function renderMarkup(response) {
  if (response.length > 1) {
    refs.searchResult.innerHTML = countryListTpl(response);
  } else {
    refs.searchResult.innerHTML = countryTpl(response);
  }
}

function clearSearchResult() {
  refs.searchResult.innerHTML = '';
}
