(() => {
    'use strict';

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            // Select the input element for address
            const inputEmail = form.querySelector('#emailInput')
            const passwordInput = form.querySelector('#inputPass')
            const addressInput = form.querySelector('#inputAdress');
            const addressInput2 = form.querySelector('#inputAdress2');
            const inputCity = form.querySelector('#cityInput');
            const inputPostalCode = form.querySelector('#postalCodeInput');
            const inputCountry = form.querySelector('#countryInput');
            const inputCheckTerms = form.querySelector('#checkTerms');




            /*---==VALIDACION EMAIL==---*/
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(inputEmail.value.trim())) {

                event.preventDefault();
                event.stopPropagation();

                inputEmail.classList.add('is-invalid');
                inputEmail.nextElementSibling.innerHTML = 'Ingrese un correo electrónico válido.';
            } else {
                inputEmail.classList.add('is-invalid');
                inputEmail.nextElementSibling.innerHTML = '';
            }



            /*---==VALIDACION PASSWORD==---*/
            if (passwordInput.value.trim().length < 6) {

                event.preventDefault();
                event.stopPropagation();

                passwordInput.classList.add('is-invalid');
                passwordInput.nextElementSibling.innerHTML = 'La contraseña debe tener al menos 6 caracteres.';
            } else {
                passwordInput.classList.remove('is-invalid');
                passwordInput.nextElementSibling.innerHTML = '';
            }


            /*---==VALIDACION DIRECCIÓN==---*/
            if (addressInput.value.trim().length < 5) {

                event.preventDefault();
                event.stopPropagation();

                addressInput.classList.add('is-invalid');
                addressInput.nextElementSibling.innerHTML = 'La dirección debe tener al menos 5 caracteres.';
            } else {

                addressInput.classList.remove('is-invalid');
                addressInput.nextElementSibling.innerHTML = '';
            }

            /*---==VALIDACION DIRECCIÓN 2==---*/
            if (addressInput2.value.trim().length < 5) {

                event.preventDefault();
                event.stopPropagation();

                addressInput2.classList.add('is-invalid');
                addressInput2.nextElementSibling.innerHTML = 'La dirección debe tener al menos 5 caracteres.';
            } else {

                addressInput2.classList.remove('is-invalid');
                addressInput2.nextElementSibling.innerHTML = '';
            }

            /*---==VALIDACION CIUDAD==---*/
            if (inputCity.value.trim().length < 4) {

                event.preventDefault();
                event.stopPropagation();

                inputCity.classList.add('is-invalid');
                inputCity.nextElementSibling.innerHTML = 'La ciudad debe tener al menos 4 caracteres.';
            } else {
                inputCity.classList.remove('is-invalid');
                inputCity.nextElementSibling.innerHTML = '';
            }

            /*---==VALIDACION CÓDIGO POSTAL==---*/
            const postalCodeRegex = /^\d+$/; // Expresión regular que permite solo números
            if (!postalCodeRegex.test(inputPostalCode.value.trim())) { // Verifica si el valor contiene solo números

                event.preventDefault();
                event.stopPropagation();

                inputPostalCode.classList.add('is-invalid'); // Agrega la clase 'is-invalid' para mostrar que hay un error
                inputPostalCode.nextElementSibling.innerHTML = 'El código postal debe contener solo números.'; // Muestra un mensaje de error
            } else if (inputPostalCode.value.trim().length < 4) { // Verifica si el código postal tiene menos de 4 caracteres

                event.preventDefault();
                event.stopPropagation();

                inputPostalCode.classList.add('is-invalid'); // Agrega la clase 'is-invalid' para mostrar que hay un error
                inputPostalCode.nextElementSibling.innerHTML = 'El código postal debe tener al menos 4 caracteres.'; // Muestra un mensaje de error
            } else {
                inputPostalCode.classList.remove('is-invalid'); // Si la validación es correcta, quita la clase 'is-invalid'
                inputPostalCode.nextElementSibling.innerHTML = ''; // Borra el mensaje de error
            }


            /*---==VALIDACION PAIS==---*/
            if (inputCountry.value.trim().length < 4) {

                event.preventDefault();
                event.stopPropagation();

                inputCountry.classList.add('is-invalid');
                inputCountry.nextElementSibling.innerHTML = 'La ciudad debe tener al menos 4 caracteres.';
            } else {
                inputCountry.classList.remove('is-invalid');
                inputCountry.nextElementSibling.innerHTML = '';
            }



            /*---==VALIDACION ACEPTACIÓN DE TÉRMINOS==---*/
            if (!inputCheckTerms.checked) { // Verifica si el checkbox no está marcado

                event.preventDefault();
                event.stopPropagation();

                inputCheckTerms.classList.add('is-invalid'); // Agrega la clase 'is-invalid' para mostrar que hay un error
                inputCheckTerms.nextElementSibling.innerHTML = 'Debes aceptar los términos para continuar.'; // Muestra un mensaje de error
            } else {
                inputCheckTerms.classList.remove('is-invalid'); // Si se ha marcado el checkbox, quita la clase 'is-invalid'
                inputCheckTerms.nextElementSibling.innerHTML = ''; // Borra el mensaje de error
            }




















            form.classList.add('was-validated');
        }, false);
    });
})();
