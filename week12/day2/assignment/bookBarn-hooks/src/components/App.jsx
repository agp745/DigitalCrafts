import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import '../css/App.css'
import Books from './Books'
import Header from './Header'
import { useDispatch } from 'react-redux'
import { addBooks } from '../store/booksSlice'

function App() {

  const [books, setBooks] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    fetchBooks()
  }, [])

  const fetchBooks = async() => {
    const response = await fetch('http://localhost:8080/api/books')
    .then(res => res.json())

    console.log(response)
    setBooks(response)
    dispatch(addBooks(response))
  }

  return (
    <div className="App">
      <Header />
      <Books books={books} />
    </div>
  )
}

export default App
