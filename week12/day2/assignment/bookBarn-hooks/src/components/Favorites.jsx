import { useSelector } from "react-redux";

export default function Favorites() {

    const favorites = useSelector(state => state.favorites.favorites)
    console.log(favorites)

    const list = favorites.map((book) => {
        return (
            <div key={book.id}>
                <img src={book.imageURL}></img>
                <div><b>{book.title}</b></div>
                <div>{book.genre}</div>
                <div><i>{book.year}</i></div>
            </div>
        )
    })

    return(
        <>
            <h1>FAVORITES</h1>
            {favorites.length === 0 ? (
                <h2>No Favorited Books</h2>
            ) : (
                <section>{list}</section>
            )}
        </>
    )
}