import React from "react";

const TodoList = ({ todos, toggleCompleted, clearCompleted }) => {
  console.log(todos);
  return (
    <>
      <button className="clear-btn" onClick={clearCompleted}>Clear completed</button>
      <div className="todoList">
        {todos.map(e => {
          return <div
            className={"item " + (e.completed ? "done" : "")}
            key={e.id}
            onClick={() => toggleCompleted(e.id)}>
            {e.item}
          </div>
        })}
      </div>
    </>
  );
};

export default TodoList;