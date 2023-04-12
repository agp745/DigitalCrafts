import { Component } from 'react'
import './App.css'
import Books from './components/Books'
import AddBook from './components/AddBook'

class App extends Component {

  constructor() {
    super(),
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.fetchBooks()
  }

  fetchBooks = async () => {
    const response = await fetch('http://localhost:8080/api/books')
    .then((res) => res.json())

    this.setState({
      books:response
    })
    console.log(response)
  }

  render() {

    return (
      <div className="App">
        <Books books={this.state.books}/>
      </div>
    )
  }
}

export default App
