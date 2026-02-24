// Función que obtiene un valor del localStorage y garantiza que sea un arreglo
function safeArray(key) {
    const data = JSON.parse(localStorage.getItem(key));
    return Array.isArray(data) ? data : [];
}

window.productos = safeArray("productos");
window.carrito   = safeArray("carrito");
window.ventas    = safeArray("ventas");

function guardarProductos() {
    localStorage.setItem("productos", JSON.stringify(productos));
}

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
// Guarda productos, carrito y ventas en localStorage al mismo tiempo
// Estado global simple
window.productos = JSON.parse(localStorage.getItem("productos")) || [];
window.carrito = JSON.parse(localStorage.getItem("carrito")) || [];
window.ventas = JSON.parse(localStorage.getItem("ventas")) || [];

function guardarTodo() {
    localStorage.setItem("productos", JSON.stringify(productos));
    localStorage.setItem("carrito", JSON.stringify(carrito));
    localStorage.setItem("ventas", JSON.stringify(ventas));
}