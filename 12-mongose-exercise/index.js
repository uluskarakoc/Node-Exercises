const mongoose = require("mongoose");

async function main() {
  mongoose.set("strictQuery", false);
  await mongoose.connect("mongodb://localhost:27017/booksDB");
}
main().catch((err) => console.log(err));
//Exercise 1:

const bookSchema = new mongoose.Schema({
  Title: { type: String, required: true },
  Author: String,
  Pages: Number,
});

//Exercise 2:

const Book = new mongoose.model("Book", bookSchema);
const book = new Book({
  Title: "The Great Gatsby",
  Author: "F. Scott Fitzgerald",
  Pages: 218,
});
//  book.save();
//Exercise 3:

const carSchema = new mongoose.Schema({
  Make: { type: String, required: true },
  Model: String,
  Year: Number,
});
//Exercise 4:

const Car = new mongoose.model("Car", carSchema);
const car = new Car({
  Make: "Toyota",
  Model: "Camry",
  Year: 2022,
});
// car.save();

//Exercise 5:

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

//Exercise 6:

const updateYear = async () => {
  try {
    const res = await Car.updateOne({ Make: "Toyota" }, { Year: 2023 });
    console.log("Year is Update", res);
  } catch (err) {
    console.log(err);
  }
};
//   updateYear();

//Exercise 7:

const authorSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Age: Number,
  Books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
});
//Exercise 8:

const Author = new mongoose.model("Author", authorSchema);
const author = new Author({
  Name: "J.K. Rowling",
  Age: 55,
  Books: [Object("64a3185962298f6be3f6df61")],
});
// author.save();

//Exercise 9:
const userSchema = new mongoose.Schema({
  Username: { type: String, required: true },
  Email: String,
  Favorites: Array,
});
//Exercise 10:
const User = new mongoose.model("User", userSchema);
const user = new User({
  Username: "johnDoe",
  Email: "johndoe@example.com",
  Favorites: [Object("64a3185962298f6be3f6df61")],
});
// user.save();

//Exercise 11:
const getBooks = async () => {
  try {
    const allbooks = await Book.find();
    console.log(allbooks);
  } catch (err) {
    console.log(err);
  } finally {
    mongoose.connection.close();
  }
};
// getBooks();
//Exercise 12:
const getAuthor = async () => {
  try {
    const allAuthor = await Author.find();
    console.log(allAuthor);
    console.log(allAuthor[0].Name);
    console.log(allAuthor[0].Books);
  } catch (err) {
    console.log(err);
  } finally {
    mongoose.connection.close();
  }
};
// getAuthor();
//Exercise 13:
const getUser = async () => {
  try {
    const allUser = await User.find();
    console.log(allUser);
    console.log(allUser[0].Username);
    console.log(allUser[0].Email);
  } catch (err) {
    console.log(err);
  } finally {
    mongoose.connection.close();
  }
};
// getUser();
//Exercise 14:
const addBook = async () => {
  try {
    const res = await User.updateOne(
      { Username: "johnDoe" },
      { $push: { Favorites: "64a3185962298f6be3f6df62"} }
    );
    console.log("User is Update", res);
  } catch (err) {
    console.log(err);
  }
};
addBook();
