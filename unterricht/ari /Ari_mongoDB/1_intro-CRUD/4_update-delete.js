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
});

// Model
const Person = new mongoose.model("Person", personSchema);

// update one

// Fruit.updateOne({ name: "19" }, { name: "Pear" })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const updateFruit = async () => {
  try {
    const res = await Fruit.updateOne(
      { _id: "64a27aa35a2716504500f260" },
      { name: "undefined" }
    );
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
// updateFruit();

// update many

// Fruit.updateMany({ name: "undefined" }, { name: "many" })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const updateFruits = async () => {
  try {
    const res = await Fruit.updateMany({ name: "undefined" }, { name: "many" });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

// delete

// Fruit.deleteOne({ name: "Apple" })
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

const deleteManyFruits = async () => {
  try {
    const result = await Fruit.deleteMany({ name: "many" });
    console.log(result);
  } catch (err) {
    console.log(err);
  } finally {
    mongoose.connection.close();
  }
};

// deleteManyFruits();
