const BASE_URL = 'https://restcountries.com/v2/name/';

export default async function fetchCountries(searchQuery) {
  const url = `${BASE_URL}${searchQuery}`;
  const response = await fetch(url);
  return await response.json();
}
