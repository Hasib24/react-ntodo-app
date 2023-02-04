import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todos from "./Todos";
import style from "./style/home.module.css";
import { v4 as uuidv4 } from "uuid";

// const todos = [
//   {
//     id: 1,
//     title: "todo title 01",
//     desc: "todo description 01",
//   },
//   {
//     id: 2,
//     title: "todo title 02",
//     desc: "todo description 02",
//   },
//   {
//     id: 3,
//     title: "todo title 03",
//     desc: "todo description 03",
//   },
// ];

export default function Home() {
  const [todos, setTodos] = useState([]);

  const todoCarrer = (todo) => {
    console.log(todo);

    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), todo }];
    });
  };
  // console.log(todos);
  const idCarryer = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <div className={style.home}>
      <h2>Todo Application</h2>
      <NewTodoForm onCarrer={todoCarrer} />
      <Todos todos={todos} idCarryer={idCarryer} />
    </div>
  );
}
