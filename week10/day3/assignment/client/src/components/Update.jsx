import { Component } from "react";
import Header from "./Header";


class Update extends Component {

    constructor() {
        super(),
        this.state = {
            title: "",
            genre: "",
            publisher: "",
            year: 0,
            imageURL: "",
        }
        
    }

    sendUpdate = async (id) => {

        const response = await fetch(`http://localhost:8080/api/update/${id}`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(this.state)
        })

        const result = await response.json
        console.log(result)
    }

    inputUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        const book = this.props.update
        return(
            <>
                <h2>update</h2>
                <input type="text" value={book.title} name="title" onChange={this.inputUpdate}/>
                <input type="text" value={book.genre} name="genre" onChange={this.inputUpdate}/>
                <input type="text" value={book.publisher} name="publisher" onChange={this.inputUpdate}/>
                <input type="text" value={book.year} name="year" onChange={this.inputUpdate}/>
                <input type="text" value={book.imageURL} name="imageURL" onChange={this.inputUpdate}/>
                <input type="hidden" value={book.id} name="id" onChange={this.inputUpdate}/>
                <button onClick={() => this.sendUpdate(book.id)}>Update Book</button>
            </>
        )
    }
}

export default Update