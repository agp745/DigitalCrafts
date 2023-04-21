import { useDispatch } from "react-redux";
import { increment, decrement} from "./counterSlice";

export default function Increment() {

    const dispatch = useDispatch()

    return(
        <>
            <h1>Increment</h1>
            <button onClick={() => dispatch(decrement())}> - </button>
            <button onClick={() => dispatch(increment())}> + </button>
        </>
    )
}