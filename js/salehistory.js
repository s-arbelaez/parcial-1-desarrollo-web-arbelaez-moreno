function renderHistorial() {
  const cont = document.getElementById("historial");
  if (!cont) return;
  const ventas = JSON.parse(localStorage.getItem("ventas")) || [];
  cont.innerHTML = "";
  if (!Array.isArray(ventas) || ventas.length === 0) {
    const emptyMsg = document.createElement("section");
    emptyMsg.innerHTML = `
      <i class="fa fa-book fa-4x" aria-hidden="true"></i>
      <p>No hay ventas registradas</p>
    `;
    cont.appendChild(emptyMsg);
  } else {
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
}
renderHistorial()