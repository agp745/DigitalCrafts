import { Component } from "react";


class Stepper extends Component {

    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }


    render() {

        return (
            <>
                <h1>{this.state.counter}</h1>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.increment}>+</button>
            </>
        )
    }
}

export default Stepper