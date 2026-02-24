let historialCompras = [];
let historialVentas = [];

function confirmarVenta(metodoPago, cliente = null) {
  const venta = new Venta({
    id: historialVentas.length + 1,
    items: [...carrito],
    metodoPago,
    cliente
  });

  // Descontar stock
  venta.items.forEach(i => {
    const p = catalogo.find(p => p.id === i.id);
    p.stock -= i.cantidad;
  });

  historialVentas.push(venta);
  carrito = [];

  guardarTodo();
}
function registrarCompra(compra) {
    compra.items.forEach(i => {
    let producto = catalogo.find(p => p.id === i.id);
    if (!producto) {
    crearProducto({
            id: i.id,
            nombre: i.nombre,
            precio: i.precioVenta,
            stock: i.cantidad,
            imagen: i.imagen,
            proveedor: i.proveedor,
            categoria: i.categoria
    });
    } else {
        producto.stock += i.cantidad;
    }
    });
historialCompras.push(compra);
guardarTodo();
}
