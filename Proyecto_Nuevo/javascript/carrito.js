let carrito = [];
let total = 0;

function agregarProducto(precio) {
    carrito.push(precio);
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total');
    total = carrito.reduce((acc, precio) => acc + precio, 0);
    totalElemento.textContent = total;

    // Limpiar la lista del carrito
    while (listaCarrito.firstChild) {
        listaCarrito.removeChild(listaCarrito.firstChild);
    }

    // Llenar la lista del carrito
    carrito.forEach((precio, index) => {
        const li = document.createElement('li');
        li.textContent = `Producto ${index + 1} - $${precio}`;
        listaCarrito.appendChild(li);
    });
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

function comprar() {
    alert("Compra realizada");
}






