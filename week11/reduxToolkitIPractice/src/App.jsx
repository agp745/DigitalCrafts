import './App.css'
import Increment from './components/counter/Increment'
import CounterDisplay from './components/counter/CounterDisplay'
import Amount from './components/counter/Amount'


function App() {

  return (
    <>
      <h1>Counter App</h1>
      <CounterDisplay />
      <Increment />
      <br />
      <Amount />
    </>
  )
}

export default App
