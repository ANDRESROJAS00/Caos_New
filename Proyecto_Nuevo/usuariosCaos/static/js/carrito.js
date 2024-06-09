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
        li.classList.add("d-flex", "justify-content-between", "align-items-center");

        li.innerHTML = `Producto ${index + 1} - $${precio} 
                        <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">Eliminar</button>`;
        listaCarrito.appendChild(li);
    });
}

function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

function eliminarProducto(indice) {
    carrito.splice(indice, 1); // Elimina un elemento del array en el índice dado
    actualizarCarrito();
}

function comprar() {
    alert("Compra realizada");
}







