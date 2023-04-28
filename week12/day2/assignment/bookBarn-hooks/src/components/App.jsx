import { useEffect } from 'react'
import '../css/App.css'
import Books from './Books'
import Header from './Header'
import { useSelector, useDispatch } from 'react-redux'
import { addBooks, fetchBooks } from '../store/booksSlice'

function App() {

  const { books, isLoading } = useSelector((state) => state.books)
  const dispatch = useDispatch()
  console.log(books)

  useEffect(() => {
    dispatch(fetchBooks())
  }, [])

  return (
    <div className="App">
      <Header />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Books books={books} />
        // <div>swag</div>
      )}
    </div>
  )
}

export default App
