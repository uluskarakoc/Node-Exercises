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


//lehrer lösung
// import express from 'express';

// const app = express();
// const port = 3001


// app.get('/hello', (request, response) => {
//     response.send('hallo hier ist ein Text')
// });

// app.get('/time', (request, response) => {
//     const date = new Date()
//     const time = date.toISOString()
//     response.send(time)
// });

// app.get('/random', (request, response) => {
//     const zahl = Math.floor(Math.random() * 10)
//     response.send(`random number: ${zahl}`)
// });

// app.get('/isNumber/:value', (request, response) => {
//     const value = request.params.value
//     console.log(typeof value);

//     if (isNaN(value)) {
//         response.send('This is not a number')
//     } else {
//         response.send('This is a number')
//     }
// });



// app.listen(port, () => {
//     console.log("The server is listening... 🐒")
// });


