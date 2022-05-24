const inputLastName = document.getElementById("user-lastname");
const inputFirstName = document.getElementById("user-firstname");
const inputPhoneAbb = document.getElementById("user-phone-abb");
const inputPhone = document.getElementById("user-phone");
const inputAddress = document.getElementById("user-address");
const inputLocation = document.getElementById("user-location");
const inputDistrict = document.getElementById("user-district");
const inputEmail = document.getElementById("user-email");
const inputBirth = document.getElementById("user-birth");
const btnSubmit = document.getElementById("form-register-submit");
const badgeModal = document.getElementById("modal-badge");
const btnToggleModal = document.getElementById("btn-toggle-modal");

const displayLastName = document.getElementById("display-name-last");
const displayFirstName = document.getElementById("display-name-first");
const displayPhone = document.getElementById("display-phone");
const displayAddress = document.getElementById("display-address");
const displayCountry = document.getElementById("display-country");
const displayDistrict = document.getElementById("display-district");
const displayEmail = document.getElementById("display-email");
const displayBirth = document.getElementById("display-birth");

displayFirstName.innerHTML = inputFirstName.value;
displayLastName.innerHTML = inputLastName.value;
displayPhone.innerHTML = inputPhoneAbb.innerHTML+inputPhone.value;
displayAddress.innerHTML = inputAddress.value;
displayCountry.innerHTML = inputLocation.value;
displayDistrict.innerHTML = inputDistrict.value;
displayEmail.innerHTML = inputEmail.value;
displayBirth.innerHTML = inputBirth.value;

inputFirstName.addEventListener("change", () => {
    displayFirstName.innerHTML = inputFirstName.value;
});

inputLastName.addEventListener("change", () => {
    displayLastName.innerHTML = inputLastName.value;
});

inputPhone.addEventListener("change", () => {
    displayPhone.innerHTML = inputPhoneAbb.innerHTML+inputPhone.value;
});

inputAddress.addEventListener("change", () => {
    displayAddress.innerHTML = inputAddress.value;
});

inputLocation.addEventListener("change", () => {
    displayCountry.innerHTML = inputLocation.value;
});

inputDistrict.addEventListener("change", () => {
    displayDistrict.innerHTML = inputDistrict.value;
});

inputEmail.addEventListener("change", () => {
    displayEmail.innerHTML = inputEmail.value;
});

inputBirth.addEventListener("change", () => {
    displayBirth.innerHTML = inputBirth.value;
});

btnToggleModal.addEventListener("click", () => {
    if (inputBirth.value == '' && inputFirstName.value == '' && inputLastName.value == '' && inputPhone.value == '' && inputLocation.value == '' && inputEmail.value == '') {        
        btnSubmit.classList.add('d-none');
        badgeModal.classList.remove('d-none');
    }
    if (inputBirth.value != '' && inputFirstName.value != '' && inputLastName.value != '' && inputPhone.value != '' && inputLocation.value != '' && inputEmail.value != '') {
        btnSubmit.classList.remove('d-none');
        badgeModal.classList.add('d-none');
    }
});