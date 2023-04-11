import { Component } from "react";

class Favorite extends Component {

    constructor() {
        super(),
        this.state = {
            name: "",
            place: ""
        }
    }

    getName = (e) => {
        console.log(e.target.value)
        this.setState({
            name: e.target.value
        })
    }

    getPlace = (e) => {
        this.setState({
            place: e.target.value
        })
    }

    save = (e) => {
        
    }

    render() {
        return (
            <>
                <input type="text" placeholder="name"  name="name" onChange={this.getName}/>
                <input type="text" placeholder="place"  name="place" onChange={this.getPlace}/>
                <button onClick={this.save}>Enter</button>
                <p>{this.state.name}</p>
                <p>{this.state.place}</p>
            </>
        )
    }
}

export default Favorite