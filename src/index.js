import './css/styles.css';

const searchBox = document.querySelector('#search-box');
console.log(searchBox)

searchBox.addEventListener("input", (event) => {
    console.log(searchBox.value)
    fetchCountries(searchBox.value)
}
)


function fetchCountries(name) {
    fetch(`https://restcountries.com/v2/all?fields=${name}.official,capital,population,flags.svg,languages`)
        .then(response => {
           console.log(response) // Response handling
        })
        .then(data => {
            // Data handling
        })
        .catch(error => {
            // Error handling
        });
}
const DEBOUNCE_DELAY = 300;
