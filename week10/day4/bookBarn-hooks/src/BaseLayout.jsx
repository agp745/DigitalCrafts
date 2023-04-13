import { NavLink } from "react-router-dom"



function Header() {
    return(
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to ="/add-book">Add Book</NavLink>
        </>
    )
}

function Footer() {
    return(
        <>
            <p>©copyright 2023</p>
        </>
    )
}

function BaseLayout(props) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}
export default BaseLayout