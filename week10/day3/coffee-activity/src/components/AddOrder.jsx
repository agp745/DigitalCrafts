import { Component } from "react";


class AddOrder extends Component {

    constructor() {
        super()
        this.state = {
            total: 5
        }
    }

    addChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addOrder = async() => {
        await fetch('https://island-bramble.glitch.me/orders', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: this.state
        })
    }

    render() {
        return(
            <>
                <input type="text" name="coffeeName" placeholder="coffeeName" onChange={this.addChanges}/>            
                <input type="text" name="size" placeholder="size" onChange={this.addChanges}/>            
                <input type="text" name="name" placeholder="name" onChange={this.addChanges}/> 
                <button onClick={this.addOrder}>Add</button>           
            </>
        )
    }
}

export default AddOrder