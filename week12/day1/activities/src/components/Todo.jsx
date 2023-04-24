import { connect } from "react-redux"
import { useState } from "react"
import { addItem } from "../store/creators/actionCreators"
import { ADD_ITEM } from "../store/actions/actionTypes"

function Todo(props) {

    const [newItem, setNewItem] = useState("")

    const list = props.todo.map((item, id) => {
        return <div key={id}>{item}</div>
    })

    return(
        <>
            <h1>TODO</h1>
            <h2>{list}</h2>
            <input type="text" onChange={e => setNewItem(e.target.value)}/>
            <button onClick={() => props.addItem(newItem)}>Add Item</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        todo: state.todo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item) =>  dispatch(addItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)