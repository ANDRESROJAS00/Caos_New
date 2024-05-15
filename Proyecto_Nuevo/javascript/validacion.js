$(document).ready(function () {
    $('.needs-validation').submit(function (event) {
        var form = $(this);
        var isValid = true;

        // Validación de email
        var inputEmail = $('#emailInput', form);
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(inputEmail.val().trim())) {
            isValid = false;
            inputEmail.addClass('is-invalid');
            inputEmail.next().html('Ingrese un correo electrónico válido.');
        } else {
            inputEmail.removeClass('is-invalid');
            inputEmail.next().html('');
        }

        // Validación de contraseña
        var passwordInput = $('#inputPass', form);
        if (passwordInput.val().trim().length < 6) {
            isValid = false;
            passwordInput.addClass('is-invalid');
            passwordInput.next().html('La contraseña debe tener al menos 6 caracteres.');
        } else {
            passwordInput.removeClass('is-invalid');
            passwordInput.next().html('');
        }

        // Resto de las validaciones...

        // Validación de dirección
        var addressInput = $('#inputAdress', form);
        if (addressInput.val().trim().length < 5) {
            isValid = false;
            addressInput.addClass('is-invalid');
            addressInput.next().html('La dirección debe tener al menos 5 caracteres.');
        } else {
            addressInput.removeClass('is-invalid');
            addressInput.next().html('');
        }

        // Validación de dirección 2
        var addressInput2 = $('#inputAdress2', form);
        if (addressInput2.val().trim().length < 5) {
            isValid = false;
            addressInput2.addClass('is-invalid');
            addressInput2.next().html('La dirección debe tener al menos 5 caracteres.');
        } else {
            addressInput2.removeClass('is-invalid');
            addressInput2.next().html('');
        }

        // Validación de ciudad
        var inputCity = $('#cityInput', form);
        if (inputCity.val().trim().length < 4) {
            isValid = false;
            inputCity.addClass('is-invalid');
            inputCity.next().html('La ciudad debe tener al menos 4 caracteres.');
        } else {
            inputCity.removeClass('is-invalid');
            inputCity.next().html('');
        }

        // Validación de código postal
        var inputPostalCode = $('#postalCodeInput', form);
        var postalCodeRegex = /^\d+$/;
        if (!postalCodeRegex.test(inputPostalCode.val().trim())) {
            isValid = false;
            inputPostalCode.addClass('is-invalid');
            inputPostalCode.next().html('El código postal debe contener solo números.');
        } else if (inputPostalCode.val().trim().length < 4) {
            isValid = false;
            inputPostalCode.addClass('is-invalid');
            inputPostalCode.next().html('El código postal debe tener al menos 4 caracteres.');
        } else {
            inputPostalCode.removeClass('is-invalid');
            inputPostalCode.next().html('');
        }

        // Validación de país
        var inputCountry = $('#countryInput', form);
        if (inputCountry.val().trim().length < 4) {
            isValid = false;
            inputCountry.addClass('is-invalid');
            inputCountry.next().html('El país debe tener al menos 4 caracteres.');
        } else {
            inputCountry.removeClass('is-invalid');
            inputCountry.next().html('');
        }

        // Validación de aceptación de términos
        var inputCheckTerms = $('#checkTerms', form);
        if (!inputCheckTerms.prop('checked')) {
            isValid = false;
            inputCheckTerms.addClass('is-invalid');
            inputCheckTerms.next().html('Debes aceptar los términos para continuar.');
        } else {
            inputCheckTerms.removeClass('is-invalid');
            inputCheckTerms.next().html('');
        }

       
        if (!isValid) {
            event.preventDefault();
            event.stopPropagation();
            alert('Faltan campos por rellenar.');
        } else {
            alert('Registrado correctamente');
            console.log('Registrado correctamente');
        }
        


        form.addClass('was-validated');
    });
});
