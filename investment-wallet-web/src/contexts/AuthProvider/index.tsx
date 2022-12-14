import React, { createContext, useEffect, useState } from "react";
import { IAuthProvider, IUser, Icontext } from "./types";
import { LoginRequest, getUserLocalStorage, setUserLocalStorage } from "./util";

export const AuthContext = createContext<Icontext>({} as Icontext)

export const AuthProvider = ({children}: IAuthProvider) => {

    const [user, setUser] = useState<IUser | null>();

    useEffect(() => {
        const user = getUserLocalStorage();

        if(user){
            setUser(user);
        }
        
    }, []);

    async function authenticate(email: string, password: string){
        const response = await LoginRequest(email, password);

        const payload = {token: response.token, email};

        setUser(payload);
        setUserLocalStorage(payload);
    }

    function logout(){
        setUser(null);
        localStorage.removeItem('user');
    }

    return(
        <AuthContext.Provider value = {{...user, authenticate, logout}}>
            {children}
        </AuthContext.Provider>
    )

}