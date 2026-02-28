const dataClima = {
  1: {
    nombre: "Santiago",
    pronostico: [28, 30, 27, 25, 26, 29, 31]
  },
  2: {
    nombre: "La Serena",
    pronostico: [20, 21, 19, 18, 20, 22, 21]
  },
  3: {
    nombre: "Valparaíso",
    pronostico: [18, 19, 17, 16, 18, 20, 19]
  },
  4: {
    nombre: "Concepción",
    pronostico: [16, 17, 15, 14, 16, 18, 17]
  },
  5: {
    nombre: "Puerto Montt",
    pronostico: [14, 13, 12, 11, 13, 14, 12]
  }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const lugar = dataClima[id];
const nombreLugar = document.getElementById("nombre-lugar");
const pronosticoDiv = document.getElementById("pronostico");
const estadisticasDiv = document.getElementById("estadisticas");

if (lugar) {
  nombreLugar.textContent = lugar.nombre;

  lugar.pronostico.forEach((temp, index) => {
    const p = document.createElement("p");
    p.textContent = `Día ${index + 1}: ${temp} °C`;
    pronosticoDiv.appendChild(p);
  });

  const max = Math.max(...lugar.pronostico);
  const min = Math.min(...lugar.pronostico);
  const promedio =
    lugar.pronostico.reduce((a, b) => a + b, 0) / lugar.pronostico.length;

  estadisticasDiv.innerHTML = `
    <p>Temperatura máxima: ${max} °C</p>
    <p>Temperatura mínima: ${min} °C</p>
    <p>Promedio semanal: ${promedio.toFixed(1)} °C</p>
  `;
}