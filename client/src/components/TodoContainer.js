import React from 'react';
import { API_URI } from '../constants';
import TodoContext from '../context/Todo/TodoContext';
import todoActions from '../reducers/todoActions';

const TodoContainer = () => {
  const { todos, dispatch, setInputModelOpen } = React.useContext(TodoContext);

  const deleteTodo = async (_id) => {
    const res = await fetch(API_URI + '/todo/delete/' + _id, {
      method: 'delete',
    });
    const data = await res.json();
    dispatch({
      type: todoActions.DELETE,
      payload: { _id },
    });
  };

  const doneToggle = async (_id) => {
    const res = await fetch(API_URI + '/todo/complete/' + _id, {
      method: 'PUT',
    });
    const data = await res.json();

    dispatch({
      type: todoActions.DONE,
      payload: { todo: data },
    });
  };

  return (
    <div className="todos-container">
      {todos.length > 0 ? (
        todos.map((todo) => {
          return (
            <div
              key={todo._id}
              className={`todo ${todo.complete ? 'todo-done' : ''}`}
            >
              <div
                className="check-box"
                onClick={() => doneToggle(todo._id)}
              ></div>
              <p onClick={() => doneToggle(todo._id)} className="text-box">
                {todo.text}
              </p>
              <div className="delete-todo" onClick={() => deleteTodo(todo._id)}>
                &times;
              </div>
            </div>
          );
        })
      ) : (
        <div className="empty-todo-box" onClick={() => setInputModelOpen(true)}>
          Add Tasks !
        </div>
      )}
    </div>
  );
};

export default TodoContainer;
