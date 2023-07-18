import { useState } from 'react'
import './App.css'
import BookList from './BookList'
import Edit from './Edit';
import CreateBook from './CreateBook';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/new" element={<CreateBook />} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
