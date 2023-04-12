import { Component } from 'react'
import './App.css'
import Orders from './components/Orders'
import AddOrder from './components/AddOrder'

class App extends Component {

  constructor() {
    super()
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    this.fetchOrders()
  }
  
  fetchOrders = async() => {
    const response = await fetch('https://island-bramble.glitch.me/orders')
    .then((response) => response.json())
    console.log(response)
    this.setState({
      orders: response
    })
  }

  render() { 
    return (
      <div className="App">
        <Orders orders={this.state.orders}/>
        <AddOrder />
      </div>
    )
  }
}

export default App
