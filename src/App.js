import { Fragment, useState } from 'react';
import Header from './components/task/Header';
import TaskList from './components/task/TaskList';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, taskName: 'learn react', isDone: false },
    { id: 2, taskName: 'learn react hooks', isDone: true },
  ]);
  return (
    <Fragment>
      {/* Header Section */}
      <Header setTasks={setTasks} />

      {/* TaskList Section */}
      <TaskList todos={tasks} setTasks={setTasks} />
    </Fragment>
  );
}

export default App;
