import React from 'react';
import Task from './Task';

const TaskList = ({ todos, setTasks }) => {
  return (
    <ul className="todo-list">
      {/* Task Component */}
      {todos.map(element => (
        <Task task={element} key={element.id} setTasks={setTasks} />
      ))}
    </ul>
  );
};

export default TaskList;
