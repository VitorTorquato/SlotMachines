import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Home,SignIn, SignUp,Game } from "../pages";


export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/game',
                element: <Game/>
            }
        ]
    },
    //authRoutes
    {
        path:'/register',
        element: <SignUp/>
    },
    {
        path:'/login',
        element: <SignIn/>
    }
])
