import { Outlet } from "react-router-dom";
import { Header } from "../components";
import { Footer } from "../components";

export function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}