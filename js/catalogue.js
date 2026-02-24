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

function crearProductoRapido() {
  const nombre = prompt("Nombre del producto:");
  if (!nombre) return;

  const descripcion = prompt("Descripción:");
  const precio = Number(prompt("Precio:"));
  if (isNaN(precio)) return alert("Precio inválido");

  const stock = Number(prompt("Stock:"));
  if (isNaN(stock)) return alert("Stock inválido");

  const producto = new Producto({
    id: Date.now(),
    nombre,
    descripcion,
    precio,
    imagen: "https://via.placeholder.com/100",
    proveedor: "interno",
    categoria: "general",
    stock
  });

  productos.push(producto);
  guardarProductos();
  renderCatalogo();
}

document.addEventListener("DOMContentLoaded", renderCatalogo);