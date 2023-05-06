import { FC } from "react";
import TodoItem from "../Pages/TodoItem";

type P = {
  todo: { title: string; status: boolean }[];
  markChecked: (indx: number) => void;
  todoListType: "false" | "true";
};

const TodoShow: FC<P> = ({ todo, markChecked, todoListType }) => {
  let data = [...todo];

  if (todoListType == "false") {
    data = data.filter((item) => {
      return item.status + "" == todoListType;
    });
  }
  if (todoListType == "true") {
    data = data.filter((item) => {
      return item.status + "" == todoListType;
    });
  }

  if (data.length == 0) {
    return <p>Nothing to show</p>;
  }

  return (
    <div>
      <div>
        {todo.map((obj, indx) => {
          return (
            todoListType == obj.status + "" && (
              <TodoItem indx={indx} markChecked={markChecked} obj={obj} />
            )
          );
        })}
      </div>
    </div>
  );
};

export default TodoShow;
