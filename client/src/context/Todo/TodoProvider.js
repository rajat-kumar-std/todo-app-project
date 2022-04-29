import React from 'react';
import { API_URI } from '../../constants';
import todoActions from '../../reducers/todoActions';
import todoReducer from '../../reducers/todoReducer';
import TodoContext from './TodoContext';

const TodoProvider = ({ children }) => {
  // const [todos, setTodos] = React.useState([]);
  const [todos, dispatch] = React.useReducer(todoReducer, []);
  const [inputModelOpen, setInputModelOpen] = React.useState(false);

  React.useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    const res = await fetch(API_URI + '/todos', {
      method: 'GET',
    });

    const data = await res.json();
    dispatch({
      type: todoActions.SET,
      payload: { todos: data },
    });
  }
  return (
    <TodoContext.Provider
      value={{ todos, dispatch, inputModelOpen, setInputModelOpen }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
