import React, { useEffect, useState } from "react";
import classes from "./TodoList.module.scss";

function Todo({ setChecked, checked, todo }) {
  const [active, setActive] = useState(false);

  const activateMode = () => setActive(!active);

  useEffect(() => {
    if (active) setChecked(todo.id);
  }, [active]);

  return (
    <div className={classes.todo}>
      <div>
        <span>Id:</span> <span>{todo.id}</span>
      </div>
      <div>
        <span>Name:</span> <span>{todo.name} </span>
      </div>
      <div className={classes.checkbox}>
        <label>
          <input type="checkbox" onChange={activateMode} />
          <span className={classes.checkboxMaterial}>
            <span className={classes.check}></span>
          </span>{" "}
          Beauty
        </label>
      </div>
    </div>
  );
}

export default Todo;
