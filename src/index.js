import './css/styles.css';

function fetchCountries(name) {
    fetch("https://restcountries.com/v3.1/name/{name}")
        .then(response => {
            // Response handling
        })
        .then(data => {
            // Data handling
        })
        .catch(error => {
            // Error handling
        });
}
const DEBOUNCE_DELAY = 300;
