/* Mobile phone country and it's code */
const inputSelectUserCountry = document.getElementById("user-location");
const inputSelectUserMobileCountry = document.getElementById("user-country");
const phoneAbb = document.getElementById("user-phone-abb");

let arrCountry = [];
let arrCountryHtml = ``;
let arrCountryCode = [];
let arrCountryCodeHtml = ``;
let selectedCountry = '';
let selectedCountryIndex = 0;

let countryData = [];

$.getJSON("assets/js/country.js", function(data) {
    countryData = data["countries"];
    arrCountry = countryData.map((c) => c.name);
    arrCountryCode = countryData.map((c) => c.code);
    
    // Loop through input #user-location
    arrCountryCodeHtml += `<option selected>Select your country</option>`;
    for (let i=0; i<arrCountry.length; i++) {
        arrCountryCodeHtml += `<option value=${arrCountry[i]}>${arrCountry[i]}</option>`
    }
    inputSelectUserCountry.innerHTML = arrCountryCodeHtml;

    // Loop through input #user-country
    arrCountryCodeHtml += `<option selected>Select your country</option>`;
    for (let i=0; i<arrCountry.length; i++) {
        arrCountryCodeHtml += `<option value=${arrCountry[i]}>${arrCountry[i]}</option>`
    }
    inputSelectUserMobileCountry.innerHTML = arrCountryCodeHtml;
});

// Event handler for country code when the user select a country
inputSelectUserMobileCountry.addEventListener("change", () => setPhoneAbbreviation(inputSelectUserMobileCountry.value));

function setPhoneAbbreviation(val) {
    selectedCountry = val;
    selectedCountryIndex = arrCountry.indexOf(selectedCountry);
    phoneAbb.innerHTML = `${arrCountryCode[selectedCountryIndex]}`;
}