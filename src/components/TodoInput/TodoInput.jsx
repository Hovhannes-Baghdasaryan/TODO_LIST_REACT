import React from "react";
import classes from "./TodoInput.module.scss";
import { useForm } from "react-hook-form";

function TodoInput(props) {
  const { register, handleSubmit } = useForm({ mode: "onSubmit" });

  return (
    <form
      className={classes.main}
      onSubmit={handleSubmit((data) => {
        props.addTodo(data.name, false);
      })}
    >
      <h3>TodoInput</h3>
      <input
        {...register("name", { required: true })}
        className={classes.Input}
        placeholder="New Todo"
      />
      <button className={classes.btn}>Add new task</button>
    </form>
  );
}

export default TodoInput;
