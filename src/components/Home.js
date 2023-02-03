import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todos from "./Todos";
import style from "./style/home.module.css";

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

    setTodos(
      (prevTodos)=>{
        return [...prevTodos, todo]
      }
    );
  };
  console.log(todos);

  return (
    <div className={style.home}>
      <h2>Todo Application</h2>
      <NewTodoForm onCarrer={todoCarrer} />
      <Todos todos={todos} />
    </div>
  );
}
