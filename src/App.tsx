import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import AuthProvider from "./context/authContext";


import { Toaster } from 'react-hot-toast'

export function App() {

  return (
    <>
      <AuthProvider>
      <Toaster
        position='top-center'
        reverseOrder={false}
        />
        <RouterProvider router={router}/>
      </AuthProvider>
    </>
    
  )
}

