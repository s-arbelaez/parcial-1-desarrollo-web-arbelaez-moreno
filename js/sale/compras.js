function agregarAlCarrito(id) {
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

  guardarCarrito();
  renderCarrito();
}
function renderCarrito() {
  const cont = document.getElementById("carrito");
  if (!cont) return;

  cont.innerHTML = "";
  let total = 0;

  carrito.forEach(item => {
    const producto = productos.find(p => p.id === item.id);
    if (!producto) return;

    const subtotal = item.precio * item.cantidad;
    total += subtotal;

    const article = document.createElement("article");
    article.className = "carrito-item";

    article.innerHTML = `
      <img src="${producto.imagen}" alt="${item.nombre}">

      <div class="carrito-info">
        <h4>${item.nombre}</h4>
        <p>$${item.precio}</p>
      </div>

      <div class="carrito-controls">
        <button onclick="cambiarCantidad(${item.id}, -1)">−</button>
        <span>${item.cantidad}</span>
        <button onclick="cambiarCantidad(${item.id}, 1)">+</button>
        <button onclick="eliminarItem(${item.id})">🗑</button>
      </div>
    `;

    cont.appendChild(article);
  });

  document.getElementById("total").textContent = total;
}

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