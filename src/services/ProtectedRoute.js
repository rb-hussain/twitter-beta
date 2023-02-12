import { Navigate, Outlet} from "react-router-dom";

const ProtectRoute = () =>{
    const auth = localStorage.getItem("IsloggedIn");
    return auth ? <Outlet/> : <Navigate to={"/login"}/>;
    }

export default ProtectRoute;
