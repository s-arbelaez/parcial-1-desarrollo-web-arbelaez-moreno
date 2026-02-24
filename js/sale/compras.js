
class Compra {
    constructor({ id, proveedor, items, metodoPago }) {
    this.id = id;
    this.proveedor = proveedor;
    this.items = items;
    this.metodoPago = metodoPago;
    this.total = items.reduce((s, i) => s + i.costo * i.cantidad, 0);
    this.fecha = new Date().toLocaleString();
    }
}
function anularVenta(idVenta) {
  const venta = historialVentas.find(v => v.id === idVenta);
  if (venta.estado !== "ACTIVA") return;

  venta.items.forEach(i => {
    const p = catalogo.find(p => p.id === i.id);
    p.stock += i.cantidad;
  });

  venta.estado = "ANULADA";
  guardarTodo();
}
function reembolsoParcial(idVenta, productoId, cantidad) {
  const venta = historialVentas.find(v => v.id === idVenta);
  const item = venta.items.find(i => i.id === productoId);

  item.cantidad -= cantidad;
  const p = catalogo.find(p => p.id === productoId);
  p.stock += cantidad;

  guardarTodo();
}