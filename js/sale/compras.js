// Agrega un producto al carrito usando su id
function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto || producto.stock <= 0) return;

  const item = carrito.find(i => i.id === id);
  if (item) {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;
    const item = carrito.find(i => i.id === id);
    if (item) {
    if (item.cantidad < producto.stock) item.cantidad++;
    } else {
    carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: 1
    });
    }

  guardarTodo();
  renderCarrito();
    guardarCarrito();
    renderCarrito();
}
// Renderiza el contenido del carrito en el HTML

function renderCarrito() {
  const cont = document.getElementById("carrito");
  if (!cont) return;

  cont.innerHTML = "";
  let total = 0;

  carrito.forEach(i => {
    total += i.precio * i.cantidad;

    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      ${i.nombre} x${i.cantidad}
      <button onclick="i.cantidad--; limpiar()">-</button>
      <button onclick="agregarAlCarrito(${i.id})">+</button>
    const cont = document.getElementById("carrito");
    if (!cont) return;
    cont.innerHTML = "";
    let total = 0;
    carrito.forEach(item => {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;
    const div = document.createElement("div");
    div.innerHTML = `
        <strong>${item.nombre}</strong>
        <button onclick="cambiarCantidad(${item.id}, -1)">-</button>
        ${item.cantidad}
        <button onclick="cambiarCantidad(${item.id}, 1)">+</button>
        = $${subtotal}
        <button onclick="eliminarItem(${item.id})">🗑</button>
    `;
    cont.appendChild(row);
  });

  document.getElementById("total").textContent = total;
    cont.appendChild(div);
    });
    document.getElementById("total").textContent = total;
}

function limpiar() {
  carrito = carrito.filter(i => i.cantidad > 0);
  guardarTodo();
  renderCarrito();
function cambiarCantidad(id, delta) {
    const item = carrito.find(i => i.id === id);
    const producto = productos.find(p => p.id === id);
    if (!item || !producto) return;
    item.cantidad += delta;
    if (item.cantidad <= 0) {
    carrito = carrito.filter(i => i.id !== id);
    } else if (item.cantidad > producto.stock) {
    item.cantidad = producto.stock;
    }
    guardarCarrito();
    renderCarrito();
}

function eliminarItem(id) {
    carrito = carrito.filter(i => i.id !== id);
    guardarCarrito();
    renderCarrito();
}