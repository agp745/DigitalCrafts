import { useState, useEffect } from "react"
import axios from "axios"

export default function Api() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    },[])

    const getUsers = async () => {
        const arr = (await axios.get('http://localhost:8080/api/users')).data
        setUsers(arr)
    }

    const listOfUsers = users.map((user) => {
        return(
            <li key={user.id}>
                <div>{user.first_name}</div>
                <div>{user.last_name}</div>
                <div>{user.age}</div>
            </li>
        )
    })

    return(
        <>
            <h1>Question 3</h1>
            <ul>{listOfUsers}</ul>
        </>
    )
}