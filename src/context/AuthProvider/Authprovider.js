import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)

const Authprovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // for user state 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside state change', currentUser);
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])


    // email sign up method 
    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // email sign in method 
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // update user method 
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    }

    // email verification 
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    // google sign in method
    const signInGoogle = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }


    // github sign in method
    const signInGithub = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }


    // sign out 
    const logOut = () => {
        // setLoading(true);
        console.log(signOut(auth));
        return signOut(auth);
    }


    const authInfo = {
        user,
        setUser,
        signIn,
        signUp,
        updateUserProfile,
        verifyEmail,
        signInGoogle,
        signInGithub,
        logOut,
        loading,
        setLoading,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;