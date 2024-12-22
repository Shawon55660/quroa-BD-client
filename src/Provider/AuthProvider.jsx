/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)


    // regsiter system by firebase
    const regsiter = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login with email and password by firebase
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //login with google by firebase
    const googleLogin = () => {
        setLoader(true)
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }
    //logout system by firebase

    const logOut = () => {
        return signOut(auth)
    }
    const authInfo = {
        regsiter,
        login,
        user,
        setUser,
        logOut,
        googleLogin,
        loader


    }

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, user => {
            setUser(user)
            setLoader(false)
        })
        return () => {
            return unsubcribe()
        }
        
       
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>

    );
};

export default AuthProvider;