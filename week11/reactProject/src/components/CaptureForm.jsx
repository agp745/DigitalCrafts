import { useState } from "react"

export default function CaptureForm() {

    const [form, setForm] = useState({})
    const [preview, setPreview] = useState({})

    const handleInput = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value 
        })
    }

    const handleCapture = ()  => {
        setPreview(form)
    }

    return(
        <>
            <h1>Question 5</h1>
            <h2>Name: {preview.name}</h2>
            <h2>Email: {preview.email}</h2>
            <h2>Address: {preview.address}</h2>
            <input type="text" placeholder="name" name="name" onChange={handleInput} />
            <input type="text" placeholder="email" name="email" onChange={handleInput} />
            <input type="text" placeholder="address" name="address" onChange={handleInput} />
            <button onClick={handleCapture}>Capture</button>
        </>
    )
}