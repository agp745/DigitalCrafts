import { useState, useEffect } from 'react'

import './App.css'
import Counter from './components/Counter'

function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
      getItems()
  })

  const getItems = async () => {
      const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10').then(res => res.json())
      setItems(response)
  }

  const showItems = items.map((item) => {

    const images = item.images.map((image) => {
      return <img src={image} />
    })

    return(
      <section key={item.id}>
        <h2>{item.title}</h2>
        <p>{item.price}</p>
        <p>{item.description}</p>
        <div>
        {images}
        </div>
      </section>
    )
  })

  return (
    <div className="App">
     <Counter />
     <div>{showItems}</div>
    </div>
  )
}

export default App
