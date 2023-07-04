const mongoose = require("mongoose");

// mit type module
// import * as mongoose from "mongoose";

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://localhost:27017/fruitsDB");
}

main().catch((err) => console.log(err));

// Schema
const fruitSchema = new mongoose.Schema({
  name: String,
  score: Number,
  review: String,
});

// create a Model
const Fruit = new mongoose.model("Fruit", fruitSchema);

// creating a document

const fruit = new Fruit({
  name: "Apple",
  score: 7,
  review: "Nice Fruit",
});

// absenden

// fruit.save();

// Person

// Schema

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Model
const Person = new mongoose.model("Person", personSchema);

// neue person

const person = new Person({
  name: "Danka",
  age: 18,
});

// absenden

// person
//   .save()
//   .then(() => {
//     console.log("document created");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// insertMany

const banana = new Fruit({
  name: "Banana",
  score: 10,
  review: "sdadfsagfag",
});

const mango = new Fruit({
  name: "Mango",
  score: 6,
  review: "sddwdadfsagfagsdad",
});
const orange = new Fruit({
  name: "Orange",
  score: 9,
  review: "ffwafsdadfsagfaggwg",
});

Fruit.insertMany([banana, mango, orange])
  .then(() => {
    console.log("Data inserted");
  })
  .catch((err) => {
    console.log(err);
  });
