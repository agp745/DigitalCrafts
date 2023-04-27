import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Update() {

    const navigate = useNavigate()

    const { books } = useSelector(state => state.books)

    const { id } = useParams()
    const [book, setBook] = useState("")

    useEffect(() => {
        const selectedBook = books[0].filter(book => book.id === parseInt(id))
        setBook(selectedBook[0])
    }, [])


    const updateBook = async (id) => {
        await axios.post(`http://localhost:8080/api/update/${id}`, book)
        .then(res => console.log(res.data))

        navigate('/')
    }

    const handleInput = (e) => {
        const { name, value } = e.target
        setBook({
            ...book,
            [name]: value
        })
       
    }

    return(
        <>
            <h1>UPDATE</h1>
            <input type="text" name="title" value={book.title} onChange={handleInput} />
            <input type="text" name="imageURL" value={book.imageURL} onChange={handleInput} />
            <button onClick={() => updateBook(book.id)}>update</button>
        </>
    )
}