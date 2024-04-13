let total = 0;

function agregarAlCarrito(precio) {
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const totalPrecioElement = document.getElementById('total-precio');
    totalPrecioElement.textContent = `$${total.toFixed(2)}`;
}
