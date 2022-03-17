import { Navigate, useLocation } from "react-router";
import swal from "sweetalert";
import Loading from "../components/loading";
import { useAuth } from "./auth";


export const RequireAuth = ({children}) => {
    const auth = useAuth();
    const location = useLocation();
    
    if(!auth.loggedIn){
        if(auth.isLoading)
            return <Loading />
        return <Navigate to="/login" state={{path: location.pathname}}/>
    }
    return children
}
 