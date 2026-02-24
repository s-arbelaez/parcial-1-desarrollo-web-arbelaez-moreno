
function verFactura(idVenta) {
  const v = historialVentas.find(v => v.id === idVenta);
  console.log(v);
}