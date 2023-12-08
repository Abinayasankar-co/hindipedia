import { createContext, useContext, useEffect, useState} from "react";
import {
    createUserWithEmailAndPassword,
    signWithEmailAndPassword,
    signOut,
    onAuthStateChanged
}from "firebase/auth";
import {auth} from "../firebase";

const userAuthContext = createContext();

export function userAuthContextProvider({children}){

    


    function signup(email,password){
        return  createUserWithEmailAndPassword(auth,email,password);
    }

    function login(email,password){
        return  createUserWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
           const unsubscribe = onAuthStateChanged(auth,(currentuser)=>{
                setUser(currentuser);
           });
           return() =>{
            unsubscribe();
           }
    },[]);

    return (<userAuthContext.Provider value={null}>{children}</userAuthContext.Provider>
    
    );
}

export function useUserAuth(){
    return useContext(userAuthContext);
}
   
