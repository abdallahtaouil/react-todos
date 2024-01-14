import React from 'react';
import AddTask from './AddTask';

const Header = ({setIsComplete}) => {
  return (
    <header className="my-todos">
      <h1 className="title">My Todo List</h1>
      {/* AddTask Component */}
      <AddTask />
      <button onClick={()=>setIsComplete(true)}>tasks complited</button>
      <button onClick={()=>setIsComplete(false)}>tasks uncomplited</button>
    </header>
  );
};

export default Header;
