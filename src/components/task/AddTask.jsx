import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { addtask } from './redux/Action';
const AddTask = () => {
  const [text, setText] = useState('');
const dispatch=useDispatch()
  const onTextChanged = event => setText(event.target.value);

  const onAddClicked = () => {
    if (text === '') {
      alert('Please Enter a Task Name');
    } else {
      const newTask = { id: Date.now(), taskName: text, isDone: false };
      console.log(newTask);
      dispatch(addtask(newTask))
      setText('');
    }
  };

  return (
    <div className="input-group">
      <input
        type="text"
        value={text}
        onChange={onTextChanged}
        placeholder="Add Todo..."
      />
      <button className="addBtn" onClick={onAddClicked}>
        Add
      </button>
    </div>
  );
};

export default AddTask;
