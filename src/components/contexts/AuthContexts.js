import { createContext } from "react";

const DefaultValue = {
    IsLoggedIn : false,
    SetAuthc : () =>{}
}

const AuthContext =  createContext(DefaultValue);


export default AuthContext;