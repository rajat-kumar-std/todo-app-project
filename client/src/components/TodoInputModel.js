import React from 'react';
import { API_URI } from '../constants';
import TodoContext from '../context/Todo/TodoContext';
import todoActions from '../reducers/todoActions';

const TodoInputModel = () => {
  const { dispatch, inputModelOpen, setInputModelOpen } =
    React.useContext(TodoContext);

  const [todoText, setTodoText] = React.useState('');
  if (!inputModelOpen) return;

  const addTodoHandler = async () => {
    if (todoText.trim().length === 0) {
      setTodoText('');
      return;
    }
    const todo = await addNewTodo(todoText);
    dispatch({
      type: todoActions.ADD,
      payload: { todo },
    });

    setTodoText('');
    setInputModelOpen(false);
  };

  async function addNewTodo(newTodoText) {
    const res = await fetch(API_URI + '/todo/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        text: newTodoText,
      }),
    });

    const data = await res.json();
    return data;
  }

  return (
    <div className="model-container">
      <div className="add-todo-model">
        <h2>Add Tasks</h2>
        <input
          type="text"
          placeholder="Enter new task"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          className="todo-input"
        />
        <div>
          <input
            type="button"
            onClick={addTodoHandler}
            value="Create Task"
            className="submit-new-todo-btn"
          />
          <input
            type="button"
            onClick={() => setInputModelOpen(false)}
            value="Cancle"
            className="cancle-btn"
          />
        </div>
      </div>
    </div>
  );
};

export default TodoInputModel;
