import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    return(
        <>
            <h1>Count is: {count}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </>
    )

}

export default Counter