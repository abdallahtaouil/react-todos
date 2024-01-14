import React from 'react';
import {useDispatch} from 'react-redux'
import { deletetask, edittask } from './redux/Action';
const Task = ({ task }) => {
  const { id, taskName, isDone } = task;
const dispatch=useDispatch()


  return (
    <li>
      <span className={isDone === true ? 'completed' : ''} onClick={()=>dispatch(edittask(id,{id,taskName,isDone:!isDone}))}>
        {taskName}
      </span>
      <i className="fa-solid fa-trash-can" onClick={()=>dispatch(deletetask(id))} ></i>
    </li>
  );
};

export default Task;
