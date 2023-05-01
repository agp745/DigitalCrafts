import { addToCart } from "../store/cartSlice"
import { addFavorite, removeFavorite } from "../store/favoriteSlice"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchBooks } from "../store/booksSlice"

function Books(prop) {

    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites.favorites)
    const [isDeleted, setIsDeleted] = useState(false)

    useEffect(() => {
        if (isDeleted) {
            dispatch(fetchBooks())
        }
        setIsDeleted(false)
    }, [isDeleted])

    
    const booksArr = prop.books || []
    const list = booksArr.length ? booksArr.map((book) => {
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
    }) : null

    const deleteBook = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/api/delete/${id}`, {
                method: "post",
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            console.log(response)
            setIsDeleted(true)
        } catch(e) {
            console.log(e)
        }
    }
    
    return(
        <section>{list}</section>
    )
}

export default Books