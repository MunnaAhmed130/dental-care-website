import initializeAuthentication from "../Firebase/Firebase.init";
import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword,  signInWithEmailAndPassword, signOut } from "firebase/auth";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    const handleGoogleSignIn = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const googleUser = result.user;
              setUser(googleUser)
          }).catch((error) => {
            setError(error.message)
          })
        .finally(() => setIsLoading(false));
        
    }
    // console.log(user)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
    }, [])
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleSignUp = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('your Password should be 6 character long')
        }
        isLogin ? handleSignIn(email, password) : createNewUser(email, password);
    }

    const createNewUser = (email,password) => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            // setUser(result.user)
            console.log(result.user)
            setError('')
        })
        .catch((error) => {
            setError(error.message);
        });
    }


    const handleSignIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user)
            setError('')
        })
        .catch((error) => {
          setError(error.message)
        });
        }

    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }

    const handleLogOut = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
        setUser({})
        }).catch((error) => {
            setError(error.message)
        })
        .finally(()=>setIsLoading(false))
    }
    


    return {
        user,
        error,
        handleEmail,
        handlePassword,
        handleSignUp,
        handleSignIn,
        toggleLogin,
        isLogin,
        isLoading,
        handleGoogleSignIn,
        handleLogOut
    }
}

export default useFirebase;