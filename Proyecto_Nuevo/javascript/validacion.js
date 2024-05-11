(() => {
    'use strict';

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation');

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            // Select the input element for address
            const addressInput = form.querySelector('#inputAdress');
            
            // Check if the address input is empty or has less than 5 characters
            if (addressInput.value.trim().length < 5) {
                // If the address input is empty or has less than 5 characters, prevent form submission
                event.preventDefault();
                event.stopPropagation();

                // Add Bootstrap's is-invalid class to show the input as invalid
                addressInput.classList.add('is-invalid');

                // Add a custom error message
                addressInput.nextElementSibling.innerHTML = 'La dirección debe tener al menos 5 caracteres.';
            } else {
                // If the address input has 5 or more characters, remove the is-invalid class
                addressInput.classList.remove('is-invalid');

                // Reset the error message
                addressInput.nextElementSibling.innerHTML = '';
            }

            form.classList.add('was-validated');
        }, false);
    });
})();
