import { FC, useState } from "react";
import Button from "../UI-Componnet/Button";
import Form from "./Form";
import TodoShow from "../UI-Componnet/TodoShow";

type P = {};

type todo = {
  title: string;
  status: boolean;
};

const Home: FC<P> = () => {
  const [FormToggle, setFormToggle] = useState(false);
  const [todo, setTodo] = useState<todo[]>([]);

  function handleClick() {
    setFormToggle(!FormToggle);
  }

  function addTodo(newTodo: string) {
    let temp = [...todo];
    let newObj = { title: newTodo, status: false };
    temp.push(newObj);
    setTodo(temp);
  }

  const markChecked = (indx: number) => {
    const temp = [...todo];
    temp[indx].status = !temp[indx].status;
    setTodo(temp);
  };

  return (
    <div className="my-10 max-w-6xl space-y-8 mx-auto ">
      <h1 className="text-3xl font-bold">Things to get done</h1>

      <TodoShow markChecked={markChecked} todo={todo} todoListType="false" />

      {FormToggle ? (
        <Form setFormToggle={setFormToggle} addTodo={addTodo} />
      ) : (
        <Button onClick={handleClick} mode="Primary">
          Add a todo
        </Button>
      )}

      <TodoShow markChecked={markChecked} todo={todo} todoListType="true" />
    </div>
  );
};

export default Home;
