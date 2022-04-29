import React from 'react';
import TodoProvider from './context/Todo/TodoProvider';
import TodoContainer from './components/TodoContainer';
import TodoInputModel from './components/TodoInputModel';
import TodoHeader from './components/TodoHeader';
import ThemeContext from './context/Theme/ThemeContext';
import ThemeToggler from './components/ThemeToggler';

const App = () => {
  const { theme } = React.useContext(ThemeContext);
  return (
    <div className={`App-container ${theme}`}>
      <div className="App">
        <div>
          <ThemeToggler />
          <h1 className="title">Todo App</h1>
        </div>
        <TodoProvider>
          <TodoHeader />
          <TodoInputModel />
          <TodoContainer />
        </TodoProvider>
      </div>
    </div>
  );
};

export default App;
