
const baseUrl = 'https://restcountries.eu/rest/v2/name/';

export default function fetchCountries(name) {
    return fetch(baseUrl + name)
        .then(response => response.json())
        .catch(error => console.log(error))
};

