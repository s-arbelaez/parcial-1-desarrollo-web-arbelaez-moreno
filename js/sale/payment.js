function finalizarVenta() {
  if (carrito.length === 0) return;

  const metodo = prompt("1.Efectivo  2.Nequi  3.Debe");
  const metodoPago =
    metodo === "1" ? "Efectivo" :
      metodo === "2" ? "Nequi" :
        "Debe";

  carrito.forEach(i => {
    const p = productos.find(p => p.id === i.id);
    if (p) {
      p.stock -= i.cantidad;
    }
  });

  ventas.push({
    id: Date.now(),
    items: [...carrito],
    total: carrito.reduce((s, i) => s + i.precio * i.cantidad, 0),
    metodoPago,
    fecha: new Date().toLocaleString()
  });

  carrito = [];
  guardarTodo();
  Toastify({
    text: "Venta registrada, haz click para ver historial",
    duration: 3000,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background: "linear-gradient(to right, #225dca, #7b50dd)",
    },
    onClick: function () { window.location.href = '../salehistory.html' }
  }).showToast();

}