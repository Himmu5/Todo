import { ButtonHTMLAttributes, FC } from "react";

type P = {
  children: string;
  mode : "Primary" | "Secondary"
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<P> = ({ children , mode ,...rest}) => {

    let extraClasss = ""
    if(mode == 'Primary'){
        extraClasss = " bg-yellow-400 hover:bg-yellow-500 rounded-full text-white "
    }
    if(mode == 'Secondary'){
        extraClasss = " border-black border rounded-md shoadow-md "
    }

  return (
    <div>
      <button {...rest} className={" px-4 py-1 "+ extraClasss}>{children}</button>
    </div>
  );
};

export default Button;
