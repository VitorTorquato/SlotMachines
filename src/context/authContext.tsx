import { onAuthStateChanged } from "firebase/auth";
import { ReactNode , createContext , useState , useEffect } from "react";
import {auth} from '../services/firebaseConection';
 

interface AuthProviderProps{
    children: ReactNode;
}

interface UserProps{
    uid:string;
    name:string | null;
    email:string | null;
}

type AuthContextData = {
    signed:boolean;
    user: UserProps | null;
}


export const AuthContext = createContext({} as AuthContextData);


export function AuthProvider({children} : AuthProviderProps){


    const [user,setUser] = useState<UserProps | null>(null);
    
    useEffect(() => {
        const onsub = onAuthStateChanged(auth , (user) => {
            if(user){
                setUser({
                    uid: user?.uid,
                    name: user?.displayName,
                    email: user?.email
                })
            }else{
                setUser(null);
            }
        })


        return () => {
            onsub();
        }

    }, [])


    return(
        <AuthContext.Provider
        value={{
            signed :!!user,
            user
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

