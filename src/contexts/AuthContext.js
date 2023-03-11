import React, { useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password){
    return currentUser.updatePassword(password)
  }

  //it takes the email that we want to reset a password for
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user => {
    //if verification is successfull, then we set the state to false
    setLoading(false)
    setCurrentUser(user)
  })

  return unsubscribe
  }, [])


  //here we expose the functions
  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword
  }

  return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
