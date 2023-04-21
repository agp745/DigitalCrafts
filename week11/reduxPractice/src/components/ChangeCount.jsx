import { connect } from "react-redux"

function ChangeCount(props) {

    const handleIncrement = () => {
        props.increment()
    }

    const handleDecrement = () => {
        props.decrement()
    }


    return (
        <>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({type: 'DECREMENT'})
    }
}

export default connect(null, mapDispatchToProps)(ChangeCount)