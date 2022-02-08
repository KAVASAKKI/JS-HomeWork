// Main imports
import '../sass/main.scss';
import CountriesApiService from './countriesApiService';
import countryListTpl from '../templates/countries-list.hbs';
import countryTpl from '../templates/country.hbs';
import debounce from 'lodash.debounce';

// Notifications plugin imports
import { defaults, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
defaults.delay = 2000;
defaults.styling = 'brighttheme';

// Main code
const refs = {
  searchQuery: document.querySelector('[data-action="query"]'),
  searchResult: document.querySelector('[data-action="result"]'),
};
refs.searchQuery.addEventListener('input', debounce(onSearch, 500));

const countriesApiService = new CountriesApiService();

function onSearch(e) {
  if (e.target.value) {
    countriesApiService.query = e.target.value;
    countriesApiService.fetchCountries().then(processingRequest);
  } else clearSearchResult();
}

const processingRequest = response => {
  if (response.status === 404) {
    clearSearchResult();
    console.error('Error 404. Not Found!');
    return error({
      title: 'Ошибка 404',
      text: 'Нет ни одного результата по вашему запросу',
    });
  } else if (response.length > 9) {
    clearSearchResult();
    return info({
      title: 'Слишком много результатов поиска',
      text: 'Необходимо более специфичный запрос!',
    });
  } else {
    renderMarkup(response);
    return success({
      title: 'Успех',
      text: `По вашему запросу было найдено: ${response.length} результатов`,
    });
  }
};

function renderMarkup(response) {
  if (response.length > 1 && response.length < 10) {
    refs.searchResult.innerHTML = countryListTpl(response);
  } else {
    refs.searchResult.innerHTML = countryTpl(response);
  }
}

function clearSearchResult() {
  refs.searchResult.innerHTML = '';
}
