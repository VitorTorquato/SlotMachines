import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Home, SignIn, SignUp } from "../pages";

export const router = createBrowserRouter([
    {
        element: <Layout/>,
        children:[
            {
                path: '/',
                element: <Home/>
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
