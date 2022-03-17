import { Navigate, useLocation } from "react-router";
import swal from "sweetalert";
import { useAuth } from "./auth";


export const RequireAuth = ({children}) => {
    const auth = useAuth();
    const location = useLocation();
    
    if(!auth.loggedIn && auth.isLoding){
        return <Navigate to="/login" state={{path: location.pathname}}/>
    }
    return children
}
 