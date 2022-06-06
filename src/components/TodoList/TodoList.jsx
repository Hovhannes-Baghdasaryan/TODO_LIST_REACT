import React from "react";
import classes from "./TodoList.module.scss";
import Todo from "./Todo";

function TodoList({ todos, setChecked }) {
  const newTodos = todos.map((item, index) => (
    <Todo
      key={index}
      todo={item}
      checked={item.checked}
      setChecked={setChecked}
    />
  ));

  return (
    <div className={classes.main}>
      <h3>TodoList</h3>
      <div className={classes.buttons}>
        <button>All</button>
        <button>Done</button>
        <button>Todo</button>
      </div>
      <div>{newTodos}</div>
    </div>
  );
}

export default TodoList;
