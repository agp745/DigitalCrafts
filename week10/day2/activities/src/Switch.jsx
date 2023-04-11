import { Component } from "react";

class Switch extends Component {

    constructor() {
        super()
        this.state = {
            isOn: false,
        }
    }

    switch = () => {
        this.setState({
            isOn: !this.state.isOn 
        })
    }

    render() {
        return (
            <>
                <button onClick={this.switch}>{this.state.isOn ? "ON" : "OFF"}</button>
            </>
        )
    }
}

export default Switch