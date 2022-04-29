import todoActions from './todoActions';

const todoReducer = (todos, action) => {
  switch (action.type) {
    case todoActions.SET:
      return [...action.payload.todos];

    case todoActions.ADD:
      return [...todos, action.payload.todo];

    case todoActions.DELETE:
      return todos.filter((todo) => todo._id !== action.payload._id);

    case todoActions.DONE:
      return todos.map((todo) => {
        if (todo._id === action.payload.todo._id) {
          todo.complete = !todo.complete;
        }
        return todo;
      });

    default:
      return todos;
  }
};

export default todoReducer;
