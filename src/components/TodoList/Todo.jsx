import React, { useEffect, useState } from "react";
import classes from "./TodoList.module.scss";
import styles from "./checkBox.module.scss";
import IsChecked from "../common/Messages";
import { AiFillCheckCircle, AiFillDelete, AiFillEdit } from "react-icons/ai";

function Todo({ setChecked, checked, todo, ...props }) {
  const [active, setActive] = useState(false);
  const [edit, setEdit] = useState(false);
  const [value, setV] = useState("");

  const activateMode = () => setActive(!active);
  const activeEditMode = () => {
    setEdit(!edit);
    if (edit) props.setValue(value, todo.id);
  };
  const deleteValue = () => props.deleteValue(todo.id);

  useEffect(() => {
    if (active) setChecked(todo.id);
    setActive(false);
  }, [active]);

  return (
    <div className={classes.todo}>
      {!edit ? (
        <IsChecked name={todo.name} check={checked} />
      ) : (
        <input
          className={classes.editInput}
          autoFocus={true}
          value={value}
          onChange={(e) => setV(e.target.value)}
        />
      )}
      <div className={styles.checkbox}>
        {!edit ? (
          <>
            <label>
              <input type="checkbox" onChange={activateMode} />
              <span className={styles.checkboxMaterial}>
                <span className={styles.check}></span>
              </span>
            </label>
            <AiFillEdit onClick={activeEditMode} />
            <AiFillDelete onClick={deleteValue} />
          </>
        ) : (
          <AiFillCheckCircle onClick={activeEditMode} />
        )}
      </div>
    </div>
  );
}

export default Todo;
