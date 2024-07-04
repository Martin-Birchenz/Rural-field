// Limpiar campos
document.getElementById("botonLimpiar").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("pedidos").reset();
  document.getElementById("resultadoConsumo").innerText =
    "Resultado de consumo diario:";
  document.getElementById("resultadoEncierre").innerText =
    "Resultado días de encierre:";
});

// Consumo diario
document
  .getElementById("calcularConsumo")
  .addEventListener("click", function () {
    var kgE = parseFloat(document.getElementById("kgE").value);
    var kgS = parseFloat(document.getElementById("kgS").value);

    var resultadoConsumo = (kgE + kgS) / 2;
    var resultadoConsumo = resultadoConsumo * 0.03;

    document.getElementById("resultadoConsumo").innerText =
      "Resultado de consumo diario: " + resultadoConsumo + " kg";
  });

// Días de encierre
document
  .getElementById("calcularEncierre")
  .addEventListener("click", function () {
    var kgE = parseFloat(document.getElementById("kgE").value);
    var kgS = parseFloat(document.getElementById("kgS").value);

    if (kgE > kgS) {
      var resultadoEncierre = (kgE - kgS) / 1.1;
    } else {
      var resultadoEncierre = (kgS - kgE) / 1.1;
    }

    resultadoEncierre = Math.floor(resultadoEncierre);

    document.getElementById("resultadoEncierre").innerText =
      "Resultado días de encierre: " + resultadoEncierre + " días";
  });

document.getElementById("pedidos").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();

    const form = event.target.form;
    const index = Array.prototype.indexOf.call(form, event.target);
    if (index < form.elements.length - 1) {
      form.elements[index + 1].focus();
    }
  }
});
