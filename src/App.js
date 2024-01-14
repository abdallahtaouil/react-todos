import { Fragment } from 'react';
import Header from './components/task/Header';
import TaskList from './components/task/TaskList';
import { useState } from 'react';

function App() {
  const[isComplete,setIsComplete]=useState(false)
  return (
    <Fragment>
      {/* Header Section */}
      <Header setIsComplete={setIsComplete} />

      {/* TaskList Section */}
      <TaskList isComplete={isComplete} />
    </Fragment>
  );
}

export default App;
