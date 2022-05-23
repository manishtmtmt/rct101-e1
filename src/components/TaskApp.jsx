import React, { useState } from "react";
import TaskHeader from "./TaskHeader/TaskHeader";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks"
import styles from "./taskApp.module.css";
import {v4 as uuidv4} from "uuid"

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [todos, setTodos] = useState([])
  const addTodo = (value) => {
    setTodos([...todos, {
      id: uuidv4(),
      text: value,
      done: false
    }])
  }
  
  const deleteTodo = (value) => {
    setTodos(todos.filter((todo)=> todo.id !== value))
  }
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader todos={todos}/>
      <AddTask addTodo={addTodo}/>
      <Tasks todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TaskApp;
