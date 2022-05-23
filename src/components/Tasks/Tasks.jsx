import React from "react";
import styles from "./tasks.module.css";
import Task from "../Task/Task"

const Tasks = ({todos, deleteTodo}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {todos.map((data)=>(
          <Task isCompleted={data.done} id={data.id} value={data.text} deleteTodo={deleteTodo} />
        ))}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
