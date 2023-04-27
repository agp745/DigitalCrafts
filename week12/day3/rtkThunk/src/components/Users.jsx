import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchUsers } from "../app/slices/usersSlice"

export default function Users() {

    const dispatch = useDispatch()
    const { users, isLoading } = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const displayUsers = users.map((user) => {
        return (
            <div key={user.id}>
                <img src={user.avatar} className="max-w-xs rounded-full" />
                <h2 className="uppercase">{user.first_name} {user.last_name}</h2>
                <div className="italic">{user.email}</div>
            </div>
        )
    })

    return(
        <section className="custom-container">
            <h1>USERS</h1>
            
            {isLoading ? (
                <div className="italic">Loading...</div>
            ) : (
                <div className="flex flex-wrap gap-7">{displayUsers}</div>
            )}
        </section>
    )
}