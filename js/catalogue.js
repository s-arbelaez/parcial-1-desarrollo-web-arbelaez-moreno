class Producto {
  constructor(id, nombre, categoria, precio, costo, stock, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = Number(precio);
    this.costo = Number(costo);
    this.stock = Number(stock);
    this.imagen = imagen;
  }
}

function renderCatalogo() {
  const cont = document.getElementById("catalogo");
  if (!cont) return;

  cont.innerHTML = "";
  productos.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.imagen || ''}">
      <h4>${p.nombre}</h4>
      <p>$${p.precio}</p>
      <small>Stock: ${p.stock}</small>
      <button onclick="agregarAlCarrito(${p.id})">Agregar</button>
    `;

    cont.appendChild(card);
  });
}

function crearProductoRapido() {
  const nombre = prompt("Nombre");
  if (!nombre) return;

  const precio = prompt("Precio venta");
  const costo = prompt("Costo");
  const stock = prompt("Stock inicial");

  productos.push(
    new Producto(
      Date.now(),
      nombre,
      "General",
      precio,
      costo,
      stock,
      ""
    )
  );

  guardarTodo();
  renderCatalogo();
}