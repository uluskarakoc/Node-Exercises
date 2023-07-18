import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function Edit() {
    const params = useParams();
    const [book, setBook] = useState({});
    // 1. Fetch das Buch mit der id aus dem URL Parameter.
    useEffect(() => {
        const fetchBook = async () => {
            const data = await fetch(`http://localhost:3000/books/${params.id}`); // Ist standardmäßig ein fetch request.
            const json = await data.json();

            console.log(json);
            setBook(json);
        }
        fetchBook();
    }, [])
    // 2. Tu alle daten aus dem Buch in die Form
    // 3. Wenn submit geklickt wird, soll ein patch request ausgeführt werden der das Buch im Backend verändert. 

  return (
    <>
        <form>
        <label>title</label> <input value={book.title}/>
        <label>author</label> <input value={book.author}/>
        <label>ISBN</label> <input value={book.ISBN}/>
        <label>Is Good Book?</label> <input type="checkbox" value={book.isGoodBook}/>
        <button>submit</button>
        </form>    
    </>
  )
}

export default Edit
