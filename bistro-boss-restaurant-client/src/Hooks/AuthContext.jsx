import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";


export const shareFireContext = createContext(null)
// google provider 
const googleProvider = new GoogleAuthProvider()


// fibase auth provider
const auth = getAuth(app);

const AuthContext = ({children}) => {
    const [userActive,setUserActive] = useState({})
    const [loader, setLoader ] = useState(true)

//  user Redirect url 


 // create user for register on singin 
    const createuser = (email ,password) =>{
         setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

// google Login with Email 

const googleSinging = () =>{
    signInWithPopup(auth,googleProvider)
    .then(result =>{
        console.log(result);
    })
    .catch(error =>{
        console.log(error);
    })
}
  
// singout User 

const logOut = () =>{
    signOut(auth)
    .then(result =>{
        console.log(result);
    })
    .catch(error =>{
        console.log(error);
    })
}

// singin with email or password 

const singinEmail = (email , passowr) =>{
   signInWithEmailAndPassword(auth,email,passowr)
   .then(result =>{
    console.log(result);
   })
   .catch(error =>{
    console.log(error);
   })
}


 // userAuth StateChange 

    useEffect(()=>{
        const unsuscripbe = onAuthStateChanged(auth, currentUser =>{
             console.log(currentUser);
             setUserActive(currentUser)
             setLoader(false)
        })
       return ()=>{
            unsuscripbe()
        }
     },[])

// Share Info object 
    const firebaseInfo = {createuser,userActive,loader,googleSinging,logOut,singinEmail}

    return (
        <shareFireContext.Provider value={firebaseInfo}>
            {children}
        </shareFireContext.Provider>
    );
};

export default AuthContext;