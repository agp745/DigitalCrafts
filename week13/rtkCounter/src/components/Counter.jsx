import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount, decrementByAmount, asyncIncrement, asyncDecrement } from "../store/counterSlice"
import { useState } from "react"

export default function Counter() {

    const count = useSelector(state => state.counter.count)
    const dispatch = useDispatch()

    const [value, setValue] = useState(2)

    return(
        <>
            <h1>COUNTER</h1>
            <h2>Count: {count}</h2>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <button onClick={() => dispatch(increment())}>+1</button>
            <br />
            <input type="number" value={value} onChange={e => setValue(e.target.value)} />
            <button onClick={() => dispatch(incrementByAmount(value))}>increase</button>
            <button onClick={() => dispatch(decrementByAmount(value))}>decrease</button>
            <button onClick={() => dispatch(asyncIncrement(value))}>Async Increase</button>
            <button onClick={() => dispatch(asyncDecrement(value))}>Async Decrease</button>
        </>
    )
}