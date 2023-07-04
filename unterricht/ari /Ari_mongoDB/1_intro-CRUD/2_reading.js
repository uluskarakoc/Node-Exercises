const mongoose = require("mongoose");

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

// Fruit.find()
//   .then((fruits) => console.log(fruits))
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     mongoose.connection.close();
//   });

// async await

const getFruits = async () => {
  try {
    const fruits = await Fruit.find();

    console.log(fruits);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};

// getFruits();

const getFruit = async () => {
  try {
    const fruits = await Fruit.find({ _id: "64a27aa35a2716504500f261" });

    console.log(fruits);
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};

// getFruit();

const getFruitsByName = async () => {
  try {
    const fruits = await Fruit.find();

    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  } catch (error) {
    console.log(error);
  } finally {
    mongoose.connection.close();
  }
};

// getFruitsByName();

// Fruit.find()
//   .then((fruits) => {
//     fruits.forEach((fruit) => {
//       console.log(fruit.name);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     mongoose.connection.close();
//   });
