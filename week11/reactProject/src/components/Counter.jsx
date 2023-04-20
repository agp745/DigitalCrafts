import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(null)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return(
        <>
            <h1>Question 6</h1>
            <h2>Count: {count}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </>
    )
}