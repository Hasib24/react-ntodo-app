import React from "react";
import Todo from "./Todo";

export default function Todos(props) {
  console.log(`consoled from Todos.js`);
  console.log(props.todos);
  

  return props.todos.map((todo) => <Todo todo={todo} key={todo.id} idCarryer={props.idCarryer} />);
}
