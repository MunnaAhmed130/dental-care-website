import initializeAuthentication from "../Firebase/Firebase.init";
import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();

    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const googleUser = result.user;
              setUser(googleUser)
          }).catch((error) => {
            setError(error.message)
          });
    }
    // console.log(user)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
        });
    }, [])
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleEmailSignup = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setUser(result.user)
        })
        .catch((error) => {
            setError(error.message);
        });
      
    }

    const handleLogOut = () => {
        signOut(auth)
        .then(() => {
        setUser({})
        }).catch((error) => {
            setError(error.message)
        });
    }
    


    return {
        user,
        error,
        handleGoogleSignIn,
        handleLogOut
    }
}

export default useFirebase;