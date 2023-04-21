import { useSelector } from "react-redux"

export default function CounterDisplay() {

    const count = useSelector((state) => state.counter)

    return(
        <>
            <h1>{count.value}</h1>
        </>
    )
}