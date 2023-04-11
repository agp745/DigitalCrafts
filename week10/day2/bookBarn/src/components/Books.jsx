import { Component } from "react";
import '../styles/books.css'

class Books extends Component {

    render() {

        const books = this.props.books
        const list = books.map((book) => {
            return (
                <div key={book.index}>
                    <img src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}`} />
                    <div class="title">{book.title}</div>
                    <p>{book.author}</p>
                </div>
            )
        })

        return(
            <>
               <h1>TOP BOOKS</h1>
               <div class="list">{list}</div>
            </>
        )
    }
}

export default Books