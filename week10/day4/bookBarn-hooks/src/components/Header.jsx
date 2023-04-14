import { NavLink } from "react-router-dom"

function Header() {
    return(
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add-book">Add Book</NavLink>
            <NavLink to="/login">Sign Out</NavLink>
        </>
    )
}

export default Header