import { useState } from "react"

export default function Slideshow() {
    
    const [index, setIndex] = useState(0)

    const images = [
        './react.svg',
        './vite.svg',
        './nodejs-icon.svg',
        './postgresql-icon.svg',
        './tailwindcss-icon.svg',
    ]

    const handleNext = () => {
        let idx = index + 1
        if(idx === images.length) {
            setIndex(0)
        } else {
            setIndex(idx)
        }
    }

    const handlePrev = () => {
        let idx = index - 1
        if(idx < 0 ) {
            setIndex(images.length - 1)
        } else {
            setIndex(idx)
        }
    }

    return(
        <>
            <h1>Question 8</h1>
            <img src={images[index]} />
            <br />
            <button onClick={handlePrev}>prev</button>
            <button onClick={handleNext}>next</button>
        </>
    )
}