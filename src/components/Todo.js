import React from "react";
import style from './style/todo.module.css'

import {MdOutlineDelete} from 'react-icons/md'

export default function Todo(props) {
  console.log(`consoled from Todo.js`);
  console.log(props.todo.todo);
  const {id, todo} = props.todo
  const {title, desc } = todo;
  

  const handleDelete = () =>{
    alert(`delete button clicked ${id}`)
    props.idCarryer(id)
  }

  return <div className={style.todo}>
    <span> {title} </span>
    <p>{desc}</p>
    <button onClick={handleDelete}> <MdOutlineDelete /> </button>
  </div>;
}
