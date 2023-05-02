import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Profile() {

    const navigate = useNavigate()

    const [userInfo, setUserInfo] = useState({})
    const [message, setMessage] = useState("Update Email")

    useEffect(() => {
        getUser(localStorage.getItem('token'))
    }, [])

    const getUser = async (token) => {
        const response = await axios.get(`http://localhost:8080/api/current_user/${token}`)
        setUserInfo(response.data.user)
    }

    const handleInput = (e) => {
        const { name, value } = e.target
        setUserInfo({
            ...userInfo,
            [name]: value
        })
    }

    const updateEmail = async () => {
        const body = {
            id: userInfo.id,
            email: userInfo.email
        }

        const response = await axios.post('http://localhost:8080/api/current_user/update_email', body)

        if (response.data.success) {
            console.log(response.data)
            setMessage(response.data.message)

            setTimeout(() => {
                navigate('/')
            }, 2000)
        } else {
            setMessage('Error Changing Email')
        }
    }

    return(
        <>
            <h1>PROFILE</h1>
            <h2>{message}</h2>
            {(message === 'Email Updated!') && (
                <h3>Redirecting you back to homepage...</h3>
            )}
            <input type="text" name="email" value={userInfo.email} onChange={handleInput}/>
            <button onClick={updateEmail}>Update Email</button>
        </>
    )
}