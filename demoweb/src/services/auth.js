import React from "react";
import { useContext } from "react";
import { useState,createContext } from "react";

const AuthContext  = createContext(null);

export const AuthProvider = ({children}) => {
    const[logger,setLogger] = useState(null);
    
    const login = (logger) => {
        setLogger(logger);
    }

    const logout = () =>{
        setLogger(null);
    }

    return (<AuthContext.Provider value={{ logger,login,logout}}>
        {children}
    </AuthContext.Provider>
    );

}


export const useAuth = () =>{
    return useContext(AuthContext)
}
