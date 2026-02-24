class Producto {
  constructor({ id, nombre, precio, descripcion, imagen, proveedor, categoria, stock }) {
    this.id = id;
    this.nombre = nombre;
    this.precio = Number(precio);
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.proveedor = proveedor;
    this.categoria = categoria;
    this.stock = Number(stock);
  }
}
function renderCatalogo() {
  const contenedor = document.getElementById("catalogo");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  productos.forEach(producto => {
    const card = document.createElement("article");

    const btn = document.createElement("button");
    btn.textContent = "Agregar al carrito";

    btn.addEventListener("click", () => {
      agregarAlCarrito(producto.id);
    });

    card.innerHTML = `
      <img src="${producto.imagen}" width="100">
      <h4>${producto.nombre}</h4>
      <p>${producto.descripcion}</p>
      <strong>$${producto.precio}</strong>
    `;

    card.appendChild(btn);
    contenedor.appendChild(card);
  });
}
document.addEventListener("DOMContentLoaded", renderCatalogo);