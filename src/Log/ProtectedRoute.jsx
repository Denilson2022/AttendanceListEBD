import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children, user}) =>{
    console.log(children);
    console.log(user);
    return user ? children : <Navigate to="/loginandout"></Navigate> 

}