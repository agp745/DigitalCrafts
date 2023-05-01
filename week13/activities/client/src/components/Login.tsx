import { ChangeEvent, useState } from "react"
import axios from "axios"

export default function Login() {

    const [credentials, setCredentials] = useState({})

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setCredentials({
            ...credentials,
            [name]: value
        })
    }

    const login = async() => {
        const res = await axios.post('http://localhost:8080/login', credentials)
        console.log(res.data)
        localStorage.setItem("jwt", res.data.token)
    }
 
    return(
        <>
            <input type="text" name="username" placeholder="username" onChange={handleInput}/>
            <input type="text" name="password" placeholder="password" onChange={handleInput}/>
            <button onClick={login}>Login</button>
        </>
    )
}