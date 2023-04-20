import { useState, useEffect } from "react"

export default function Timer() {

    const [time, setTime] = useState(null)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        handleTimer()
    }, [isRunning, setIsRunning])

    const handleTimer = () => {
        let interval

        if(isRunning && time > 0) {
            interval = setInterval(() => {
                setTime(time => time - 1)
            }, 1000)
        }

        if(time === 0) {
            clearInterval(interval)
            setIsRunning(false)
            alert('DONE')
        }

        return() => clearInterval(interval)
    }

    const handleStart = () => {
        setIsRunning(true)
    }

    const handleTimeInput = (e) => {
        setTime(e.target.value)
    }

    return(
        <>
            <h1>Question 10</h1>
            <div>{time}</div>
            <input type="number" placeholder="time" name="time" onChange={handleTimeInput}/>
            <button onClick={handleStart}>Start Timer</button>
        </>
    )
}