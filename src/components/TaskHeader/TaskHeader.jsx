import React, { useState } from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({todos}) => {
  // sample values to be replaced
  let totalTask = todos.length;
  let unCompletedTask = 0;  

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h1>Todo List</h1>
      You have&nbsp;
      <b data-cy="header-remaining-task">{unCompletedTask}</b>&nbsp;of&nbsp;
      <b data-cy="header-total-task">{totalTask}</b>&nbsp;tasks remaining
    </div>
  );
};

export default TaskHeader;
