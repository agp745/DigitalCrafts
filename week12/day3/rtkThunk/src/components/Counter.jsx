import { useSelector, useDispatch } from "react-redux"
import { increment } from "../app/slices/counterSlice"

function Display() {
    const state = useSelector(state => state.counter)
    return(
        <section className="custom-container">
            <h2>Count is {state.count}</h2>
        </section>
    )
}

function Increment() {
    const dispatch = useDispatch()

    return(
        <section className="custom-container">
            <button onClick={() => dispatch(increment())}>Increment +</button>
        </section>
    )
}


export default function Counter() {

    return (
        <section className="custom-container">
            <h1>COUNTER</h1>
            <div className="flex">
                <Display />
                <Increment />
            </div>
        </section>
    )
}