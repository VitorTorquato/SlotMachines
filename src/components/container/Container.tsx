import { ReactNode } from "react"



export function Container({children} : {children:ReactNode}){
    return(
        <div className="w-full bg-blue-400 mx-auto px-4 py-2">
            {children}
        </div>
    )

}