import { Component } from "react";
import '../styles/header.css'

class Header extends Component {

    render() {
        return (
            <div class="nav">
                <div>Home</div>
                <div>MyBooks</div>
                <div>Browse</div>
                <input type="text" placeholder="Search Books"/>
            </div>
        )
    }
}

export default Header