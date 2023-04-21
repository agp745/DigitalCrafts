import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Display from './components/Display'
import ChangeCount from './components/ChangeCount'
import AddSub from './components/AddSub'

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Display />
      <ChangeCount />
      <br />
      <br />
      <AddSub />
    </>
  )
}

export default App
