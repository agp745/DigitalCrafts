import { Component } from "react";
import '../css/Books.css'
import Header from "./Header";
import { NavLink } from "react-router-dom";
import Update from './Update'

class Books extends Component {

    constructor() {
        super(),
        this.state = {
            update: {
                id: -1,
                title: "",
                genre: "",
                publisher: "",
                year: 0,
                imageURL: "",
            }
        }
    }

    deleteBook = async (id) => {
     
        const response = await fetch(`http://localhost:8080/api/delete/${id}`, {
            method: "post"
        })
        .then(res => res.json())
        console.log(response)
    }

    updateBook = async (id) => {
        const response = await fetch(`http://localhost:8080/api/update/${id}`)
        .then(res => res.json())

        this.setState({
            update: response
        })

        console.log(this.state.update)
    }

    render() {

        const books = this.props.books
        const list = books.map((book) => {
            return(
                <div key={book.id}>
                    <img src={`${book.imageURL}`} />
                    <div><b>{book.title}</b></div>
                    <div>{book.genre}</div>
                    <div><i>{book.year}</i></div>
                    <button onClick={() => this.deleteBook(book.id)}>Delete</button>
                    <button onClick={() => this.updateBook(book.id)}>Update</button>
                </div>
            )
        })

        return (
            <>
                <Header />
                <h1>Books</h1>
                <section>{list}</section>
                <Update update={this.state.update}/>
            </>
        )
    }
}

export default Books