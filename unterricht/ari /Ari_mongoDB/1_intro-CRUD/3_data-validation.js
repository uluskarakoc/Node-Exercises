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

const fruit = new Fruit({
  name: [19, 2, 6],
  score: 1,
  review: "sdsadsa",
});

// fruit.save();
