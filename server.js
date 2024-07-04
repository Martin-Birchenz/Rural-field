const express = require("express");
const path = require("path");
const app = express();

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

// Página principal utilizando las rutas con send file(módulo4)
app.get("/", (req, res) => {
  res.send();
});

// Página de stock de alimentación utilizando rutas con send file(módulo4)
app.get("/stock", (req, res) => {
  let htmlPath = path.resolve(__dirname, "./stock.html");
  res.sendFile(htmlPath);
});
