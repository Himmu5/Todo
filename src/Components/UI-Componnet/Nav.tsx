import { FC } from "react";

type P = {};

const Nav: FC<P> = () => {
  return (
    <div className="flex justify-between font-bold text-xl border-b-2 border-yellow-500 py-6 max-w-6xl mx-auto">
      <div className="text-xl">Todo</div>
      <div></div>
    </div>
  );
};

export default Nav;
