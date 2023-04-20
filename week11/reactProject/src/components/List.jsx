import { useState, useEffect } from "react"
import axios from "axios"

export default function List() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    },[])

    const getUsers = async () => {
        const arr = (await axios.get('http://localhost:8080/api/users')).data
        setUsers(arr)
    }

    const deleteUser = async(id) => {
        await axios.delete(`http://localhost:8080/api/users/${id}`)
        getUsers()
    }

    const listOfUsers = users.map((user) => {
        return(
            <div key={user.id}>
                <div>{user.first_name}</div>
                <div>{user.last_name}</div>
                <div>{user.age}</div>
                <input type="checkbox"/>
                <button onClick={ () => {deleteUser(user.id)}}>delete</button>
            </div>
        )
    })

    return(
        <>
            <h1>Question 7</h1>
            <section>{listOfUsers}</section>
        </>
    )
}