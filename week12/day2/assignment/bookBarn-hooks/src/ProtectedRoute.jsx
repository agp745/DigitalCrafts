import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute(props) {

    const isAuth = useSelector(state => state.auth.isAuth)
    const navigate = useNavigate()

    useEffect(() => {
        if(!isAuth) {
            navigate('/login')
        }
    })

    return props.children
    
}