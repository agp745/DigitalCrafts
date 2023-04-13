import { NavLink } from "react-router-dom"

function Login() {
    return(
        <>
            <h1>Login</h1>
            <input type="text" placeholder="username" name="username" />
            <input type="text" placeholder="password" name="password" />
            <button>Login</button>
            <div><NavLink to="/signup">SignIn</NavLink></div>
        </>
    )
}

export default Login