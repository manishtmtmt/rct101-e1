import React, { useState } from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = ({isCompleted, id, value, deleteTodo}) => {
  const [isChecked, setIsChecked] = useState(isCompleted)
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" checked={isChecked} onChange={(e)=>setIsChecked(e.target.checked)} />
      <div data-cy="task-text" className={isChecked?styles.crossed:""}>{value}</div>
      <Counter />
      <button data-cy="task-remove-button" onClick={()=>deleteTodo(id)}>X</button>
    </li>
  );
};

export default Task;
