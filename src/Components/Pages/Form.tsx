import { FC, useState } from "react";
import Input from "../UI-Componnet/Input";
import Button from "../UI-Componnet/Button";

type P = {
  setFormToggle: (a: boolean) => void;
  addTodo: (t: string) => void;
};

const Form: FC<P> = ({ setFormToggle, addTodo }) => {
  const [todo, setTodo] = useState("");

  function addNewTodo() {
    if (todo.length > 2) {
      addTodo(todo);
    }
  }

  return (
    <div>
      <form
        className="flex flex-col space-y-8 rounded-md shadow-xl p-5"
        onSubmit={(e) => {
          e.preventDefault();
          setTodo("");
        }}
      >
        <h1 className="text-xl ">Create a Todo</h1>

        <Input
          placeholder="Enter a Todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />

        <div className="flex gap-2">
          <Button mode="Primary" onClick={addNewTodo}>
            Save
          </Button>
          <Button mode="Secondary" onClick={() => setFormToggle(false)}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
