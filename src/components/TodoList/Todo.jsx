import React, { useEffect, useState } from "react";
import classes from "./TodoList.module.scss";
import styles from "./checkBox.module.scss";
import IsChecked from "../common/Messages";

function Todo({ setChecked, checked, todo }) {
  const [active, setActive] = useState(false);

  const activateMode = () => setActive(!active);

  useEffect(() => {
    if (active) setChecked(todo.id);
    setActive(false);
  }, [active]);

  return (
    <div className={classes.todo}>
      <div>
        <IsChecked name={todo.name} check={checked} />
      </div>
      <div className={styles.checkbox}>
        <label>
          <input type="checkbox" onChange={activateMode} />
          <span className={styles.checkboxMaterial}>
            <span className={styles.check}></span>
          </span>
        </label>
      </div>
    </div>
  );
}

export default Todo;
