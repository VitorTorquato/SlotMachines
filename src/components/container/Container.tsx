import { ReactNode } from "react"

export function Container({children} : {children:ReactNode}){
    return(
        <div 
        className="w-full "
        style={{backgroundColor: '#282828'}}
        >
            {children}
        </div>
    )

}