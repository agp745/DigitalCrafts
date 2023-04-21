import { connect } from "react-redux";

function Display(props) {

    return (
        <>
            <h1>COUNT: {props.count}</h1>
        </>
    )

}

const mapStateToProps = (state) => {
    return {
        count: state.counter
    }
}

export default connect(mapStateToProps)(Display)