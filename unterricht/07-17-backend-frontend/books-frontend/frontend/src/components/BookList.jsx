import { useEffect, useState } from "react"

function BookList() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const data = await fetch("http://localhost:3000/books");
    const json = await data.json();
    console.log(json);
    setBooks(json);
  }

  useEffect(() => {
    fetchBooks();
  }, []) // Leeres Array sagt, dass useEffect nur beim ersten Laden der Komponente ausgeführt werden soll. 

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/book/${id}`, {
      method: "DELETE",
    });
    await fetchBooks();
  }

  return (
    <>
      <ul>
        {books.map((book) => (
          <li key={book._id}> {`${book.title} by ${book.author}`} <button onClick={() => handleDelete(book._id)}>delete</button></li>
        ))}
      </ul>
    </>
  )
}

export default BookList