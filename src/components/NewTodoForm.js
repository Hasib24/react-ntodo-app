import React, { useState } from "react";
import style from "./style/form.module.css";

export default function NewTodoForm(props) {
  const [todo, setNewTodo] = useState({ title: "", desc: "" });
  const { title, desc } = todo;

  const changeHandler = (e) => {
    const name = e.target.name;
    console.log(name);
    setNewTodo((oldValeu) => {
      return {...oldValeu, [name]: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // console.log(todo);
    props.onCarrer(todo)

    setNewTodo({ title: "", desc: "" });
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <div>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="type your title"
          value={title}
          onChange={changeHandler}
        />
      </div>
      <div>
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="type todo description "
          value={desc}
          onChange={changeHandler}
        />
      </div>
      <button type="submit">Add New Todo</button>
    </form>
  );
}
