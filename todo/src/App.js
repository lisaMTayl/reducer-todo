import React, {useReducer, useState} from 'react';
import {initialState, itemReducer} from './reducers/Reducer'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

function App() {

  const [newTodo, setNewTodo] = useState("");
  const [state, dispatch] = useReducer(itemReducer, initialState);

  const handleChange = (e) => {
    e.preventDefault();
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD_TODO', payload: newTodo}) };
  const toggleCompleted = (id) => { dispatch({type: 'TOGGLE_COMPLETED', payload: id })};
  const clearCompleted = () => { dispatch({type: 'CLEAR_COMPLETED' })};

  return (

    <div className="wrapper">
      <div className="todoList">
        <div className="header">
          <h1>To Do List</h1>
          <TodoForm handleSubmit={handleSubmit} handleChange={handleChange} newTodo={newTodo} />
        </div>
        <TodoList clearCompleted={clearCompleted} toggleCompleted={toggleCompleted} todos={state.todos}/>
      </div>
    </div>
  );
}

export default App;