import { NavLink } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { signout } from "../store/authSlice"

function Header() {

    const cart = useSelector((state) => state.cart)
    const auth = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    return(
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/add-book">Add Book</NavLink>
            {auth.isAuth && (
                <NavLink onClick={() => dispatch(signout())}>Sign Out</NavLink>
            )}
            {!auth.isAuth && (
                <NavLink to="/login">Login</NavLink>
            )}
            <div>cart: {cart.items.length}</div>
        </>
    )
}

export default Header