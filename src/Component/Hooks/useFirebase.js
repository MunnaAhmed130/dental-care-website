import initializeAuthentication from "../Firebase/Firebase.init";
import React from 'react';
import  { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile,  signInWithEmailAndPassword, signOut } from "firebase/auth";

initializeAuthentication();
const auth = getAuth();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [detail, setDetail] = useState([]);
    const [services, setServices] = useState([])
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    //handle Google sign in 
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
        });
    }, [])
//handle name change for header
    const handleName = e => {
        setName(e.target.value);
    }
//set user name for header
    const setUserName = () => {
        updateProfile(auth.currentUser,{
            displayName : name
        })
        .then(result =>{})
    }
//handle Email change for register
    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }
//handle register
    const handleSignUp = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('your Password should be 6 character long')
        }
        isLogin ? handleSignIn(email, password) : createNewUser(email, password);
    }

    const createNewUser = (email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setUser(result.user)
            console.log(result.user)
            setError('')
            setUserName()
        })
        .catch((error) => {
            setError(error.message);
        })
        .finally(()=>setIsLoading(false))
    }

//handle login
    const handleSignIn = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setUser(result.user)
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    };

    const toggleLogin = e => {
        setIsLogin(e.target.checked);
        console.log(e.target.checked)
    }

    
//useEffect for details
    useEffect(() => {
        const url = `fakeData.json`;
        fetch(url)
            .then(res => res.json())
        .then(data => setDetail(data))
        setIsLoading(false)
    }, [])
//useEffect for services
    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    
    //handle log out
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
        detail,
        services,
        handleName,
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
};

export default useFirebase;

