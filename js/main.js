// Estado global simple
window.productos = JSON.parse(localStorage.getItem("productos")) || [];
window.carrito = JSON.parse(localStorage.getItem("carrito")) || [];
window.ventas = JSON.parse(localStorage.getItem("ventas")) || [];

function guardarTodo() {
  localStorage.setItem("productos", JSON.stringify(productos));
  localStorage.setItem("carrito", JSON.stringify(carrito));
  localStorage.setItem("ventas", JSON.stringify(ventas));
}