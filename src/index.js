import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const searchBox = document.querySelector('#search-box');
const country = document.querySelector('.country-info');
const countryList = document.querySelector('.country-list')


searchBox.addEventListener("input", debounce(
    fetchCountries, DEBOUNCE_DELAY)
)

function fetchCountries() {
    fetch(`https://restcountries.com/v3.1/name/${searchBox.value.trim()}?fields=name,capital,population,flags,languages`)
        .then(response => {
            if (!response.ok && searchBox.value.length > 0) {
                throw new Error( Notiflix.Notify.failure("Oops, there is no country with that name"));
              }
              return response.json();
          // Response handling
        })
        .then(data => {
            if (data.length === 1) {
               country.innerHTML = `<p><img src="${data[0].flags.svg}" width="20"> <b>${data[0].name.official}</b></p>
               <p class="label"><b>Capital: </b>${data[0].capital}</p>
               <p class="label"><b>Population:  </b>${data[0].population}</p>
               <p class="label"><b>Languages: </b>${Object.values(data[0].languages)}</p>`
               countryList.innerHTML = "";
                }

        else if (data.length <= 10) {
            countryList.innerHTML = data.map(
                ({ flags, name }) =>
                `<li><img src="${flags.svg}" width="25"> <b>${name.official}</b></li>`)
              .join('')
              country.innerHTML = "";
            }
        else if (data.length > 10) {
            countryList.innerHTML = "";
            throw Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
        }
        
        })
        .catch(error => {
                     // Error handling
        });
}
