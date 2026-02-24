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
function guardarTodo() {
  localStorage.setItem("productos", JSON.stringify(productos));
  localStorage.setItem("carrito", JSON.stringify(carrito));
  localStorage.setItem("ventas", JSON.stringify(ventas));
}