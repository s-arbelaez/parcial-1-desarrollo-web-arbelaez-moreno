function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto || producto.stock <= 0) return;

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
}

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
    `;
    cont.appendChild(row);
  });

  document.getElementById("total").textContent = total;
}

function limpiar() {
  carrito = carrito.filter(i => i.cantidad > 0);
  guardarTodo();
  renderCarrito();
}