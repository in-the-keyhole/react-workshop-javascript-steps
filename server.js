const express = require("express");
const app = express();
const port = 4000;

app.get("/number", (req, res) => {
  res.send({ number: Math.floor(Math.random() * 20) });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
