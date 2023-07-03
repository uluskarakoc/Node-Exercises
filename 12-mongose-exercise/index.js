const mongoose = require("mongoose");

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://localhost:27017/booksDB");
}
main().catch((err) => console.log(err));

const bookSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Author: String,
  Pages: Number,
});

const Book = new mongoose.model("Book", bookSchema);
const book = new Book({
  Title: "The Great Gatsby",
  Author: "F. Scott Fitzgerald",
  Pages: 218,
});
//  book.save();

const carSchema = new mongoose.Schema({
  Make: { type: String, required: true },
  Model: String,
  Year: Number,
});
const Car = new mongoose.model("Car", carSchema);
const car = new Car({
  Make: "Toyota",
  Model: "Camry",
  Year: 2022,
});
// car.save();

// Book.updateOne({ Title: "The Great Gatsby" }, { Author: "Ernest Hemingway" })
//   .then((result) => console.log(result))
//   .catch((error) => console.error("error", error));

const updateBook = async () => {
  try {
    const res = await Book.updateOne(
      { Title: "The Great Gatsby" },
      { Author: "Oscar und Ulus" }
    );
    console.log("Book is Update", res);
  } catch (err) {
    console.log(err);
  }
};
// updateBook();

const updateYear = async () => {
  try {
    const res = await Car.updateOne({ Make: "Toyota" }, { Year: 2023 });
    console.log("Year is Update", res);
  } catch (err) {
    console.log(err);
  }
};
//   updateYear();

const authorSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Age: Number,
  Books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
});

const Author = new mongoose.model("Author", authorSchema);
const author = new Author({
  Name: "J.K. Rowling",
  Age: 55,
  Books: [Object("64a3185962298f6be3f6df61")],
});
// author.save();
