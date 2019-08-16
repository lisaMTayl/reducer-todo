import React, {  useState } from 'react';
const TodoForm = ({handleSubmit, handleChange, newTodo}) => {
const [text, setText] = useState("");
  return(
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          name="newTodo"
          onChange={handleChange}
        />
        <button onClick={() => { setText("")}}>Add</button>
      </form>

    </>
  )
};

export default TodoForm