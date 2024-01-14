import React from "react";
import Task from "./Task";
import { useSelector } from "react-redux";
const TaskList = ({ isComplete }) => {
  var todos = useSelector((state) => state.list);
  
  console.log(todos);

  return (
    <ul className="todo-list" b>
      {/* Task Component */}
      {todos
        .filter((e) => e.isDone === isComplete)
        .map((element) => (
          <Task task={element} key={element.id} />
        ))}
    </ul>
  );
};

export default TaskList;
