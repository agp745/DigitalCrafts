import { useState } from "react";
import { connect } from "react-redux";

function AddSub(props) {

    const [value, setValue] = useState(0)

    
    const handleInput = (e) => {
        setValue(e.target.value)
    }

    const handleAdd = () => {
        props.add(value)
    }

    const handleSubtract = () => {
        props.subtract(value)
    }

    return(
        <>
            <input type="number" name="value" onChange={handleInput} />
            <br />
            <button onClick={handleSubtract}>SUBTRACT</button>
            <button onClick={handleAdd}>ADD</button>
        </>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        add: (value) => dispatch({type: 'ADD', payload: value}),
        subtract: (value) => dispatch({type: 'SUBTRACT', payload: value})
    }
}

export default connect(null, mapDispatchToProps)(AddSub)