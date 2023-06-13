import express from "express";

const app = express();

const server = app.listen(3001, () => {
  console.log("The server is listening... 🐒");
});

// replace "/path" with your own path
app.get("/path", (request, response) => {
  response.send("Hallo Welt");
});
app.get("/hello", (request, response) => {
  response.send("Hallo Welt");
});
app.get("/time", (req, res) => {
  let date = new Date();
  res.send(date.toLocaleString());
});
app.get("/random", (req, res) => {
  let random = Math.random();
  res.send(`${random}`);
});

app.get("/number/:isNumber", (req, res) => {
  let isNumber = req.params.isNumber;

  if (isNaN(isNumber)) {
    res.send("it is not number");
  } else {
    res.send("it is number");
  }
});
