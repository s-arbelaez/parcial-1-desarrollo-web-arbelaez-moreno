// =========================
// MODELO
// =========================
class Producto {
  constructor(id, nombre, precio, descripcion, imagen, proveedor, categoria, stock) {
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

// =========================
// ESTADO (CATÁLOGO)
// =========================
let productos = [];

// Si tienes un producto inicial
if (typeof tijerasRoma !== "undefined") {
  productos.push(tijerasRoma);
}

// =========================
// RENDER DE UNA CARD
// =========================
function card(producto, catalog) {
  const article = document.createElement("article");

  const img = document.createElement("img");
  img.src = producto.imagen;
  img.width = 100;
  img.height = 100;

  const footer = document.createElement("section");

  const title = document.createElement("h4");
  title.textContent = producto.nombre;

  const desc = document.createElement("p");
  desc.textContent = producto.descripcion;

  const price = document.createElement("h3");
  price.textContent = `$${producto.precio}`;

  const stock = document.createElement("small");
  stock.textContent = `Stock: ${producto.stock}`;

  const addBtn = document.createElement("button");
  addBtn.innerHTML = '<i class="fa fa-plus-square"></i>';

  footer.append(title, desc, price, stock, addBtn);
  article.append(img, footer);
  catalog.appendChild(article);
}

// =========================
// RENDER DEL CATÁLOGO
// =========================
function renderCatalogo() {
  const catalog = document.getElementById("catalogo");
  if (!catalog) return;

  catalog.innerHTML = "";
  productos.forEach(p => card(p, catalog));
}

// =========================
// CRUD DE PRODUCTOS
// =========================
function crearProducto(data) {
  const nuevoProducto = new Producto(
    Date.now(),
    data.nombre,
    data.precio,
    data.descripcion,
    data.imagen,
    data.proveedor,
    data.categoria,
    data.stock
  );

  productos.push(nuevoProducto);
  guardarCatalogo();
  renderCatalogo();
}

function editarProducto(id, cambios) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;

  Object.assign(producto, cambios);
  guardarCatalogo();
  renderCatalogo();
}

function eliminarProducto(id) {
  productos = productos.filter(p => p.id !== id);
  guardarCatalogo();
  renderCatalogo();
}

// =========================
// STORAGE
// =========================
function guardarCatalogo() {
  localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarCatalogo() {
  const data = localStorage.getItem("productos");
  if (data) {
    productos = JSON.parse(data);
  }
}

// =========================
// FORMULARIO (USUARIO FINAL)
// =========================
const form = document.getElementById("formProducto");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    crearProducto(data);
    this.reset();
  });
}

// =========================
// INIT
// =========================
document.addEventListener("DOMContentLoaded", () => {
  cargarCatalogo();
  renderCatalogo();
});