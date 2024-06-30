const express = require("express");
const path = require("path");
const app = express();

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  let htmlpath = path.resolve(__dirname, "./index.html");
  res.sendFile(htmlpath);
});

app.get("/login", function (req, res) {
  res.send("En este apartado, vamos a poder logear al usuario");
});

app.get("/calcularDias", (req, res) => {
  const kgEntrada = parseFloat(req.query.kgEntrada);
  const kgSalida = parseFloat(req.query.kgSalida);

  const diasEncierre = calcularDiasEncierre(kgEntrada, kgSalida);
  res.send(`Se necesitan ${diasEncierre} días de encierre`);
});

app.get("/calcularConsumo", (req, res) => {
  const kgEntrada = parseFloat(req.query.kgEntrada);
  const kgSalida = parseFloat(req.query.kgSalida);

  const consumoDia = calcularConsumo(kgEntrada, kgSalida);
  res.send(`El consumo diario es de ${consumoDia}`);
});

function calcularDiasEncierre(kgEntrada, kgSalida) {
  const Adpv = 1.1;
  let diasEncierre;

  if (kgEntrada > kgSalida) {
    diasEncierre = (kgEntrada - kgSalida) / Adpv;
  } else {
    diasEncierre = (kgSalida - kgEntrada) / Adpv;
  }

  return diasEncierre;
}

function calcularConsumo(kgEntrada, kgSalida) {
  let consumoDia = (kgEntrada + kgSalida) / 2;
  consumoDia = consumoDia * 0.003;

  return consumoDia;
}

function dietaAdaptacion(cabezas, consumoDia, diasEncierre) {
  let adaptacion = cabezas * consumoDia * diasEncierre;
  let silo = adaptacion * 0.07;
  let grano = adaptacion * 0.02;
  let concentrado = adaptacion * 0.1;

  return { silo, grano, concentrado };
}

function dietaIntermedia(cabezas, consumoDia, diasEncierre) {
  let intermedio = cabezas * consumoDia * diasEncierre;
  let silo = intermedio * 0.05;
  let grano = intermedio * 0.04;
  let concentrado = intermedio * 0.1;

  return { silo, grano, concentrado };
}

function dietaTerminacion(cabezas, consumoDia, diasEncierre) {
  let terminacion = cabezas * consumoDia * diasEncierre;
  let silo = terminacion * 0.03;
  let grano = terminacion * 0.06;
  let concentrado = terminacion * 0.1;

  return { silo, grano, concentrado };
}
