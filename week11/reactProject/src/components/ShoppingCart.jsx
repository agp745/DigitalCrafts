import { useState } from "react"

export default function ShoppingCart() {

    const [cart, setCart] = useState([])
    const [item, setItem] = useState(null)

    const handleInput = (e) => {
        setItem(e.target.value)
    }

    const handleAddItem = () => {
        setCart([...cart, item])
    }

    return(
        <>
            <h1>Question 4</h1>
            <div>Amount of Items in Cart: {cart.length}</div>
            <input type="text" placeholder="type item here" name="item" onChange={handleInput}/>
            <button onClick={handleAddItem}>Add Item</button>
        </>
    )
}