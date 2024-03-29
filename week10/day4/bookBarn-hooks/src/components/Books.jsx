import { addToCart } from "../store/cartSlice"
import { useDispatch } from "react-redux"

function Books(books) {

    const dispatch = useDispatch()

    const booksArr = books.books
    const list = booksArr.map((book) => {
        return (
            <div key={book.id}>
                <img src={book.imageURL}></img>
                <div><b>{book.title}</b></div>
                <div>{book.genre}</div>
                <div><i>{book.year}</i></div>
                <button onClick={() => deleteBook(book.id)}>Delete</button>
                <button onClick={() => dispatch(addToCart(book.title))}>Add To Cart</button>
            </div>
        )
    })

    const deleteBook = async (id) => {
        const response = await fetch(`http://localhost:8080/api/delete/${id}`, {
            method: "post",
        })
        console.log(response)
    }
    
    return(
        <section>{list}</section>
    )
}

export default Books