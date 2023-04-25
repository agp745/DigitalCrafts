
function Footer() {
    return(
        <>
            <p>©copyright 2023</p>
        </>
    )
}

function BaseLayout(props) {
    return (
        <>
            {props.children}
            <Footer />
        </>
    )
}
export default BaseLayout