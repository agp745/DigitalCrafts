import { useState, useEffect } from 'react'
import { useNavigate, Routes, Route } from 'react-router-dom'

import '../css/App.css'
import Books from './Books'
import Header from './Header'
import Login from './Login'
import Signup from './Signup'

function App() {
  const navigate = useNavigate()

  const [books, setBooks] = useState([])
  const [isAuthed, setIsAuthed] = useState(true)

  useEffect(() => {
    checkAuth()
    fetchBooks()
  }, [])

  const checkAuth = () => {
    if(isAuthed) {
      console.log('user autheniticated')
    } else{
      navigate('/login')
    }
  }

  const handleAuth = (value) => {
    setIsAuthed(value)
  }

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
          <Route path="/login" element={<Login handleAuth={handleAuth}/>} />
          <Route path="/signup" element={<Signup handleAuth={handleAuth}/>} />
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/signup" element={<Signup />} /> */}
        </Routes>
    </div>
  )
}

export default App
