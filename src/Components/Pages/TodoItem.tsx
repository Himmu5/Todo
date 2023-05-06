import { FC } from "react";
import Input from "../UI-Componnet/Input";

type P = {
  obj: {
    title: string;
    status: boolean;
  };
  markChecked: (indx: number) => void;
  indx: number;
};

const TodoItem: FC<P> = ({ indx, obj, markChecked }) => {
  function handleChange() {
    markChecked(indx);
  }

  let extraClass = ""
  if(obj.status === true){
    extraClass =" line-through "
  }


  return (
    <div className="flex gap-1">
      <Input type="checkbox" onChange={handleChange} checked={obj.status} />
      <p className={"" + extraClass}>{obj.title}</p>
    </div>
  );
};

export default TodoItem;
