function renderHistorial() {
  const cont = document.getElementById("historial");
  if (!cont) return;

  cont.innerHTML = "";
  ventas.forEach(v => {
    const row = document.createElement("div");
    row.className = "venta";
    row.innerHTML = `
      <strong>Venta ${v.id}</strong>
      <p>${v.fecha}</p>
      <p>Total: $${v.total}</p>
    `;
    cont.appendChild(row);
  });
}