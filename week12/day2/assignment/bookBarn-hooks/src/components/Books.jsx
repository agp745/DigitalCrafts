import { addToCart } from "../store/cartSlice"
import { addFavorite, removeFavorite } from "../store/favoriteSlice"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

function Books(books) {

    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites.favorites)

    const booksArr = books.books
    const list = booksArr.map((book) => {
        return (
            <div key={book.id}>
                <img src={book.imageURL}></img>
                <div><b>{book.title}</b></div>
                <div>{book.genre}</div>
                <div><i>{book.year}</i></div>
                <button onClick={() => deleteBook(book.id)}>Delete</button>
                <Link to={`/update/${book.id}`}>
                    <button>Update</button>
                </Link>
                <button onClick={() => dispatch(addToCart(book.title))}>Add To Cart</button>
                {!favorites.includes(book) && (
                    <button onClick={() => dispatch(addFavorite(book))}>Add Favorite</button>
                )}
                {favorites.includes(book) && (
                    <button onClick={() => dispatch(removeFavorite(book))}>Remove Favorite</button>
                )}
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