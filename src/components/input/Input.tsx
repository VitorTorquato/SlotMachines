import { ReactNode } from "react"

export function Input({...rest}){
    return(
        <div className="w-full h-11 bg-slate-100 rounded-md">
            <input
            className="w-full h-full rounded-md px-2"
            {...rest}  />
        </div>
    )
}