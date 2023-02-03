import React from "react";
import style from './style/todo.module.css'

export default function Todo(props) {
  console.log(`consoled from Todo.js`);
  console.log(props.todo);
  const {id, title, desc } = props.todo

  return <div className={style.todo}>
    <span>{id} : {title} </span>
    <p>{desc}</p>
  </div>;
}
