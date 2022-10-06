import './css/styles.css';
import Notiflix from 'notiflix';

const searchBox = document.querySelector('#search-box');
const country = document.querySelector('.country-info');


searchBox.addEventListener("input", (event) => {
    console.log(searchBox.value)
    fetchCountries(searchBox.value)
}
)


function fetchCountries(name) {
    fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
         return response.json() // Response handling
        })
        .then(data => {
            if (data.length === 1) {
            console.log(data)
               country.innerHTML = `<li><img src="${data[0].flags.svg}" width="30"> ${data[0].name.official}</li>
               <li><p class="label">Capital: <p>${data[0].capital}</li>
               <li><p class="label">Population: <p>${data[0].population}</li>
               <li><p class="label">Languages: <p>${data[0].languages.key}</li>`
               
                }

        else if (data.length <= 10) {
            console.log(...data)
            }
        else if (data.length > 10) {
            throw Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
        }

            // Data handling
        })
        .catch(error => {
            // Error handling
        });
}
const DEBOUNCE_DELAY = 300;
