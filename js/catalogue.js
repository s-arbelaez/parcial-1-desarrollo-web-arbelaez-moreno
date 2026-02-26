/**
 * The above code defines a class `Producto`, creates functions to render, create, edit, and delete
 * products in a catalog, and sets up event listeners to interact with the catalog.
 * @returns The code snippet provided is a JavaScript code that defines a `Producto` class, functions
 * for rendering a catalog of products, creating a new product quickly, editing a product, and deleting
 * a product. The code also includes event listeners for buttons like "Agregar al carrito" (Add to
 * cart), "Editar" (Edit), and "Eliminar" (Delete) associated with each product card in the catalog
 */
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
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.addEventListener("click", (e) => {
      e.stopPropagation(); // Evita que el evento se propague al artículo
      const nuevoNombre = prompt("Nuevo nombre del producto:", producto.nombre);
      if (nuevoNombre) {
        editarProducto(producto.id, { nombre: nuevoNombre });
      const nuevoPrecio = prompt("Nuevo precio del producto:", producto.precio);
      if (nuevoPrecio && !isNaN(nuevoPrecio)) {
        editarProducto(producto.id, { precio: Number(nuevoPrecio) });
      }
      const nuevaDescripcion = prompt("Nueva descripción del producto:", producto.descripcion);
      if (nuevaDescripcion) {
        editarProducto(producto.id, { descripcion: nuevaDescripcion });
      }
      }
    });
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", (e) => {
      e.stopPropagation(); // Evita que el evento se propague al artículo
      eliminarProducto(producto.id);
    });
    card.innerHTML = `
      <img src="${producto.imagen}" width="100">
      <h4>${producto.nombre}</h4>
      <p>${producto.descripcion}</p>
      <strong>$${producto.precio}</strong>
    `;

    card.appendChild(btn);
    card.appendChild(btnEditar);
    card.appendChild(btnEliminar);
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
  const imagen = prompt(
  "URL de la imagen del producto (deja vacío para usar una por defecto):"
) || "https://via.placeholder.com/400x400?text=Producto";
  const categoria = prompt("Categoría del producto:");
  const producto = new Producto({
    id: Date.now(),
    nombre,
    descripcion,
    precio,
    imagen: prompt("Imagen URL:"),
    proveedor: "interno",
    categoria,
    stock
  });

  productos.push(producto);
  guardarProductos();
  renderCatalogo();
}
function editarProducto(id, cambios) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;
  Object.assign(producto, cambios);
  guardarProductos();
  renderCatalogo();
}

function eliminarProducto(id) {
  productos = productos.filter(p => p.id !== id);
  guardarProductos();
  renderCatalogo();
}

document.addEventListener("DOMContentLoaded", renderCatalogo);