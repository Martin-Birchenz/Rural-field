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
