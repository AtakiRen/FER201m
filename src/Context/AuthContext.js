// import React from "react";
// import { useContext, createContext, useEffect, useState } from "react";
// import {
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { auth } from "../components/firebase";

// export const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState({});
//   // tao ham login
//   const googleSignIn = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider);
//   };
//   // tao ham logout
//   const logOut = () => {
//     signOut(auth);
//   };
//   useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//       console.log("User", currentUser);
//     });
//     return () => {
//       unSubscribe();
//     };
//   }, []);

//   //
//   return (
//     <div>
//       <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
//         {children}
//       </AuthContext.Provider>
//     </div>
//   );
// };
// export const UserAuth = () => {
//   return useContext(AuthContext);
// };
import React from "react";
import { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../components/firebase";
const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };
  const logOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("User", currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
