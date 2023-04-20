import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './components/HelloWorls'
import Alert from './components/Alert'
import Api from './components/Api'
import ShoppingCart from './components/ShoppingCart'
import CaptureForm from './components/CaptureForm'
import Counter from './components/Counter'
import List from './components/List'
import Slideshow from './components/Slideshow'
import SearchFilter from './components/SearchFilter'
import Timer from './components/Timer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HelloWorld />
      <Alert />
      <Api />
      <ShoppingCart />
      <CaptureForm />
      <Counter />
      <List />
      <Slideshow />
      <SearchFilter />
      <Timer />
    </>
  )
}

export default App
