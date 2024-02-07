
import { createContext, useEffect , useState} from "react";
import {auth} from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";


export const AuthContext =createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setcurrentUser] = useState({});
 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setcurrentUser(user);

            console.log(user);
        });
 
        return () => {
            unsubscribe();
        }

        
    }, []);
 
  
    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
       

};