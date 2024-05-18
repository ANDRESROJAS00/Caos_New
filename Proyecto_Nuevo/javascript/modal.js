document.addEventListener('DOMContentLoaded', function() {
    const acceptButton = document.getElementById('acceptButton');
    const alertContainer = document.getElementById('alertContainer');
    const modalElement = document.getElementById('staticBackdrop');
    const modalInstance = new bootstrap.Modal(modalElement);

    acceptButton.addEventListener('click', function() {
        // Mostrar un mensaje de alerta
        alertContainer.innerHTML = '<div class="alert alert-success alert-dismissible fade show" role="alert">Notificaciones automáticas activadas<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

        // Cerrar el modal
        modalInstance.hide();
    });
});

