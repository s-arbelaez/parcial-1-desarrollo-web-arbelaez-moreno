function finalizarVenta() {
  if (carrito.length === 0) return;

  const metodo = prompt("1.Efectivo  2.Nequi  3.Debe");
  const metodoPago =
    metodo === "1" ? "Efectivo" :
    metodo === "2" ? "Nequi" :
    "Debe";

  carrito.forEach(i => {
    const p = productos.find(p => p.id === i.id);
    p.stock -= i.cantidad;
  });

  ventas.push({
    id: Date.now(),
    items: [...carrito],
    total: carrito.reduce((s,i)=>s+i.precio*i.cantidad,0),
    metodoPago,
    fecha: new Date().toLocaleString()
  });

  carrito = [];
  guardarTodo();
  alert("Venta realizada");
  location.href = "../../html/salehistory.html";
}