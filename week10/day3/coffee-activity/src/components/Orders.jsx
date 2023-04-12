import { Component } from "react"

class Orders extends Component {

    render() {

        const orders = this.props.orders
        const orderItems = orders.map((item) => {
            return (
                <section key = {item.id}>
                    <div><b>{item.coffeeName}</b></div>
                    <div>{item.size}</div>
                    <div>{item.name}</div>
                    <div>--------------</div>
                </section>
            )
        })
        return(
            <> 
                <h1>Orders</h1>
                <div>{orderItems}</div>
            </>
        )
    }
}

export default Orders