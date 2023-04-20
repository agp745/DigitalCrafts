import { useState } from "react"

export default function Alert() {

    const [alert, setAlert] = useState(null)

    const handleInput = (e) => {
        setAlert(e.target.value)
    }

    const handleAlert = () => {
        window.alert(alert)
    }

    return(
        <>
            <h1>Question 2</h1>
            <input type="text" placeholder="type here" name="input" onChange={handleInput}/>
            <button onClick={handleAlert}>Alert</button>
        </>
    )
}