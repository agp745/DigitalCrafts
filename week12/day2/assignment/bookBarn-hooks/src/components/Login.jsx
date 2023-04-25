import { NavLink, json, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../store/authSlice"
import App from "./App"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const state = useSelector((state) => state.auth)

    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    })

    const handleLoginInputs = (e) => {
        const { name, value } = e.target
        setCredentials((prevSetCredentials) => ({
            ...prevSetCredentials,
            [name]: value
        }))
    }

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method:"POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credentials)
            })
            .then(res => res.json())
            
            if(JSON.stringify(response) === JSON.stringify({success: "user logged in"})) {
                dispatch(login())
                navigate('/')
            } else {
                console.log('err')
            }
        }
        catch (e) {
            console.log(e)
        }
    }
    

    return(
        <>
            <h1>Login</h1>
            <input type="text" placeholder="username" name="username" onChange={handleLoginInputs}/>
            <input type="text" placeholder="password" name="password" onChange={handleLoginInputs}/>
            <button onClick={handleLogin}>Login</button>
            <div><NavLink to="/signup">Sign Up</NavLink></div>
        </>
    )
}

export default Login