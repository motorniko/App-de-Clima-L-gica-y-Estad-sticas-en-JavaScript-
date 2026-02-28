const lugares = [
  { id: 1, nombre: "Santiago" },
  { id: 2, nombre: "La Serena" },
  { id: 3, nombre: "Valparaíso" },
  { id: 4, nombre: "Concepción" },
  { id: 5, nombre: "Puerto Montt" }
];

const listaLugares = document.getElementById("lista-lugares");

lugares.forEach(lugar => {
  const div = document.createElement("div");
  div.textContent = lugar.nombre;
  div.classList.add("lugar");

  div.addEventListener("click", () => {
    window.location.href = `detalle.html?id=${lugar.id}`;
  });

  listaLugares.appendChild(div);
});