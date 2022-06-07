import React from "react";
import cn from "classnames";
import styles from "./MessagesStyle.module.scss";

const IsChecked = ({ check, name }) => {
  return (
    <span
      className={cn({
        [styles.message]: check,
      })}
    >
      {name}
    </span>
  );
};

export default IsChecked;
