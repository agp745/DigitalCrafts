import { useState, useEffect } from 'react'

import '../css/App.css'
import Books from './Books'

function App() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async() => {
    const response = await fetch('http://localhost:8080/api/books')
    .then(res => res.json())

    console.log(response)
    setBooks(response)
  }

  return (
    <div className="App">
      <Books books={books}/>
    </div>
  )
}

export default App
