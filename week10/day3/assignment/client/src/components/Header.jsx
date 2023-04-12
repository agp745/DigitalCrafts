import { Component } from "react";
import { NavLink } from "react-router-dom";


class Header extends Component {

    render() {
        return(
            <nav>
                <NavLink to="/">Home</NavLink>
                <br />
                <NavLink to="/add-book">Add a Book</NavLink>
            </nav>
        )
    }
}

export default Header