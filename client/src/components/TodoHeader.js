import React from 'react';
import TodoContext from '../context/Todo/TodoContext';

const TodoHeader = () => {
  const { setInputModelOpen } = React.useContext(TodoContext);
  return (
    <div className="title-head">
      <div className="task-heading">Your Tasks</div>
      <div onClick={() => setInputModelOpen(true)} className="add-task-btn">
        Add Task
      </div>
    </div>
  );
};

export default TodoHeader;
