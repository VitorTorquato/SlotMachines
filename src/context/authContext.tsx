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
    handleInfoUser: ({name,email,uid}:UserProps) => void;
}


export const AuthContext = createContext({} as AuthContextData);


function AuthProvider({children} : AuthProviderProps){


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

    function handleInfoUser({name,email,uid}:UserProps){
        setUser({
            name,
            email,
            uid
        })
    }


    return(
        <AuthContext.Provider
        value={{
            signed: !!user,
            user,
            handleInfoUser

        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider