import { useState, useEffect } from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../css/App.css'
import Books from './Books'
import Header from './Header'
import Login from './Login'
import Signup from './Signup'
import Favorites from './Favorites'

function App() {
  const navigate = useNavigate()

  const [books, setBooks] = useState([])

  const state = useSelector((state) => state.auth)

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
      <Header />
        <Routes>
          <Route path="/" element={<Books books={books}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
    </div>
  )
}

export default App
