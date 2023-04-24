import * as actionTypes from '../store/actions/actionTypes'
import { incrementCounter } from '../store/creators/actionCreators'
import { connect } from 'react-redux'

function Counter(props) {


    return(
        <>
            <h1>count: {props.count}</h1>
            <button onClick={() => props.increment()}>+</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        increment: () => dispatch(incrementCounter())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)