/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";


import  { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import app from "../Firebase/firebase.config";


const auth = getAuth(app);

export const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };
useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
    setLoading(true)
    setUser(currentUser)
    
  })
  return () =>{
    unsubscribe();
  }
},[])
      


  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = ()=>{
    setLoading(true)
    return signOut(auth);
  }

  const authInfo = {
    user,loading,signIn,logOut,createUser
  }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;