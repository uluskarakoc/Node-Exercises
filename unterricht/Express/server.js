// 1.express installieren

const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Hallo Welt!");
});

app.get("/contact", (req, res) => {
  res.send("you are on the path contact");
});

app.get("/random.text", (req, res) => {
  res.sendFile("random.text");
});

app.get("/contact/json", (req, res) => {
  res.send({ completed: "false", todo: "sleep" });
});
app.get("/time", (reg, res) => {
  let date = new Date();
  res.send(date.toLocaleString());
});

app.get("/mitarbeiter/:name", (req, res) => {
  let name = req.params.name;
  res.send(`Hallo ${name}`);
});

app.get('/mitarbeiter/:id/:hobby', (req, res) => {
    let id = req.params.id
    let hobby = req.params.hobby
    res.send(`Deine Id ist: ${id} Du magst ${hobby}`)
})

app.get("")
app.listen(3000, () => {
  console.log("server listening on port 3000");
});
