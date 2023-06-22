// Zwecks Einfachheit arbeiten wir ohne jegliche (Pseudo-)Datenbank
// und speichern die Bücher in einem Array
const books = [
    { title: 'Book 1', author: 'Author 1', id: 1 },
    { title: 'Book 2', author: 'Author 2', id: 2 },
    { title: 'Book 3', author: 'Author 3', id: 3 },
  ]; // Besser wäre natürlich uuid() oder ähnliches für die ids der Bücher


export const getBooks = (req, res) => {
    res.send(books)
}

export const getBestBook = (req, res) => {
    const bestBook = { title: 'Super buch', author: 'Batman' };
    res.send(bestBook)
}

export const postBooks = (req, res) => {
    // hier müssten wir eigentlich noch die Nutzereingabe
    // überprüfen, bevor wir sie in unserer "Datenbank" bzw. 
    // unserem Array speichern

    // in req.body steht der Inhalt von Body des HTTP-REquests
    const book = req.body; 
    book.id = books.length+1; // hier wäre uuid() oder ähnlich besser
    books.push(book);

    res.send({added: true, data: book});
}