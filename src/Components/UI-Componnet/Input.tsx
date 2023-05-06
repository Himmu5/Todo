import { FC, InputHTMLAttributes } from "react";

type P ={} & InputHTMLAttributes<HTMLInputElement>

const Input:FC<P> = (props)=>{
    return <input className=" px-4 py-2 border-black border focus:outline-none focus:border-yellow-400 rounded-md " {...props} />
}

export default Input;