import { Component } from "react";
import Header from "./Header";


class AddBook extends Component {

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

    input = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addBook = async () => {
        const response = await fetch('http://localhost:8080/api/books', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)            
        })
        const result = await response.json()
        console.log(result)
    }

    render() {
        return(

            <>
                <Header />
                <input type="text" placeholder="title" name="title" onChange={this.input}/>
                <input type="text" placeholder="genre" name="genre" onChange={this.input}/>
                <input type="text" placeholder="publisher" name="publisher" onChange={this.input}/>
                <input type="number" placeholder="year" name="year" onChange={this.input}/>
                <input type="text" placeholder="imageURL" name="imageURL" onChange={this.input}/>
                <button onClick={this.addBook}>Add</button>
            </>
        )
    }
}

export default AddBook