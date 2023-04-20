import { useState, useEffect } from "react"
import List from "./List"

export default function SearchFilter() {

    const [search, setSearch] = useState("")

    const list = ['apple', 'orange', 'hello', 'fox', 'pineapple', 'swag', 'speedo', 't-rex', 'apply', 'aplication', 'apptitude', 'aprehend']

    const showList = list.map((item, idx) => {
         
        if(search === "")  {
            return <div key={idx}>{item}</div>
        } else if (item.includes(search)){
            return <div key={idx}>{item}</div>
        } else {
            return 
        }
    })

    const handleInput = (e) => {
        setSearch(e.target.value)
    }

    return(
        <>
            <h1>Question 9</h1>
            <section>{showList}</section>
            <input type="text" placeholder="filter the list" onChange={handleInput}/>
        </>
    )
}