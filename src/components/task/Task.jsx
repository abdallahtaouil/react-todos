import React from 'react';

const Task = ({ task, setTasks }) => {
  const { id, taskName, isDone } = task;

  const onComplete = event =>
    setTasks(prev =>
      prev.map(element =>
        element.id === id ? { ...element, isDone: !element.isDone } : element
      )
    );

  const onDelete = event =>
    setTasks(prev => prev.filter(element => element.id !== id));

  return (
    <li>
      <span className={isDone === true ? 'completed' : ''} onClick={onComplete}>
        {taskName}
      </span>
      <i className="fa-solid fa-trash-can" onClick={onDelete}></i>
    </li>
  );
};

export default Task;
