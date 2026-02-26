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

function renderCatalogo(productos) {
  const contenedor = document.getElementById("catalogo");
  if (!contenedor) return;

  contenedor.innerHTML = "";

  productos?.forEach(producto => {
    const card = document.createElement("article");
    const footer = document.createElement("section");

    const btn = document.createElement("button");
    btn.innerHTML = `
      <i class="fa fa-cart-plus" aria-hidden="true"></i>
      Agregar al carrito
    `;

    btn.addEventListener("click", () => {
      agregarAlCarrito(producto.id);
      Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #225dca, #7b50dd)",
        },
        onClick: function () { window.location.href = 'sale/cart.html' }
      }).showToast();
    });
    const btnEditar = document.createElement("button");
    btnEditar.innerHTML = `
      <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
      Editar
    `;
    btnEditar.addEventListener("click", (e) => {
      e.stopPropagation();
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
    btnEliminar.innerHTML = `
      <i class="fa fa-trash" aria-hidden="true"></i>
      Eliminar
    `;
    btnEliminar.addEventListener("click", (e) => {
      e.stopPropagation();
      eliminarProducto(producto.id);
    });
    card.innerHTML = `
      <img src="${producto.imagen}" width="100">
      <h4>${producto.nombre}</h4>
      <p>${producto.descripcion}</p>
      <strong>$${producto.precio}</strong>
    `;

    footer.appendChild(btn);
    footer.appendChild(btnEditar);
    footer.appendChild(btnEliminar);
    card.appendChild(footer);
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
  ) || "../img/products/tijerasroma.png";
  const categoria = prompt("Categoría del producto:");
  const producto = new Producto({
    id: Date.now(),
    nombre,
    descripcion,
    precio,
    imagen,
    proveedor: "interno",
    categoria,
    stock
  });

  productos.push(producto);
  guardarProductos();
  renderCatalogo(productos);
}
function editarProducto(id, cambios) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;
  Object.assign(producto, cambios);
  guardarProductos();
  renderCatalogo(productos);
}

function eliminarProducto(id) {
  productos = productos.filter(p => p.id !== id);
  guardarProductos();
  renderCatalogo(productos);
}
function searchProduct(name) {
    const query = name.trim().toLowerCase();
    return productos.filter(product => product.nombre.toLowerCase().includes(query));
}
document.getElementById("searchButton").addEventListener("click", () => {
  const q = document.getElementById("searchBar").value;
  const filtrados = searchProduct(q);
  renderCatalogo(filtrados);
});

document.addEventListener("DOMContentLoaded", () => renderCatalogo(productos));