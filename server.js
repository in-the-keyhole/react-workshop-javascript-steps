const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/number", (req, res) => {
  res.send({ number: Math.floor(Math.random() * 20) });
});

app.post("/number", (req, res) => {
  const message = `You sent ${req.body.number}`;
  res.send({ message });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
