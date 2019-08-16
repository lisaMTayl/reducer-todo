
export const itemReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state,
        todos: state.todos.concat(
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          })
      };
    case 'TOGGLE_COMPLETED':
      return { ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload ?
            {...todo, completed: !todo.completed} : todo
        )};
    case 'CLEAR_COMPLETED':
      return { ...state,
        todos: state.todos.filter(todo => !todo.completed)};

    default: return state;
  }

};

export const initialState =
  {
    todos: [
      {
        todo: 'Learn about reducers',
        completed: false,
        id: 3892987589

      }
    ]
  };
  



