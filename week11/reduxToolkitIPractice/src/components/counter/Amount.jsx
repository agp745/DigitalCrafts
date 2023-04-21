
import { useDispatch } from "react-redux";
import { useState } from "react";
import { add, subtract, asyncAdd, asyncSubtract } from "./counterSlice";

export default function Amount() {

    const [val, setVal] = useState(2)

    const dispatch = useDispatch()

    return(
        <>
            <input type="number" value={val} onChange={e => setVal(e.target.value)} />
            <button onClick={() => dispatch(subtract(Number(val)))}>Subtract</button>
            <button onClick={() => dispatch(add(Number(val)))}>Add</button>
            <button onClick={() => dispatch(asyncAdd(Number(val)))}> async Add</button>
            <button onClick={() => dispatch(asyncSubtract(Number(val)))}> async Subtract</button>
        </>
    )
}

