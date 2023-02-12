import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProtectRoute from "./services/ProtectedRoute";

const Router = () =>{
    return(
        <>
        <Routes>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="*" element={<NotFound/>} />
            {/* {Protected Route} */}
            <Route path="/" element={<ProtectRoute />}>
            <Route path="/" element={<Home/>} />
            </Route>
        </Routes>
        </>
        )};
export default Router;