const mongoose = require("mongoose");

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://localhost:27017/fruitsDB");
}

main().catch((err) => console.log(err));

// Schema
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "No name defined"],
  },
  score: {
    type: Number,
    min: [1, "Score cannot be lower than 1"],
    max: [10, "Score cannot be higher than 10"],
  },
  review: String,
});

// create a Model
const Fruit = new mongoose.model("Fruit", fruitSchema);

// Schema

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  // embedding the schema
  favouriteFruit: fruitSchema,
});

// Model
const Person = new mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 10,
  review: "Yummy ananas",
});

const createPerson = async () => {
  const person = new Person({
    name: "Amy",
    age: 19,
    favouriteFruit: pineapple,
  });

  try {
    await pineapple.save();
    const result = await person.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// createPerson();

const mango = new Fruit({
  name: "Mangoose",
  score: 1,
  review: "asdsad,jwjdw",
});

const updateDanka = async () => {
  try {
    await mango.save();
    const result = await Person.updateOne(
      { name: "Danka" },
      { favouriteFruit: mango }
    );

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

// updateDanka();

const updateMango = async () => {
  try {
    const res = await Fruit.updateOne(
      { name: "Mangoose" },
      { review: "bababooey" }
    );
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

updateMango();
