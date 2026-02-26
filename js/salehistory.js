function renderHistorial() {
  const cont = document.getElementById("historial");
  if (!cont) return;
  const ventas = JSON.parse(localStorage.getItem("ventas")) || [];
  cont.innerHTML = "";
  if (!Array.isArray(ventas) || ventas.length === 0) {
    const text = document.createElement("p");
    text.textContent = "No hay ventas registradas";
    cont.appendChild(text);
  } else {
    ventas.forEach(v => {
      const row = document.createElement("div");
      row.className = "venta";
      row.innerHTML = `
      <strong>Venta ${v.id}</strong>
      <p>${v.fecha}</p>
      <p>Método: ${v.metodoPago}</p>
      <p>Items:</p>
      ${v.items.map(i => `<img src="${i.imagen}" width="100">`).join("")}
      <button class="toggle-items">Mostrar detalles</button>
      <div class="item-detalles" style="display:none;">
      ${v.items.map(i => `<p>${i.nombre} x${i.cantidad}</p>` ).join("")}
      </div>
      <p>Total: $${v.total}</p>
    `;
      const btnToggle = row.querySelector(".toggle-items");
      const detalles = row.querySelector(".item-detalles");
      btnToggle.addEventListener("click", () => {
        if (detalles.style.display === "none") {
          detalles.style.display = "block";
        } else {
          detalles.style.display = "none";
        }
      });
      cont.appendChild(row);
    });
  }
}
renderHistorial();