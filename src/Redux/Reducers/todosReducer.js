const addTodos = "addTodos";
const setChecked = "setChecked";

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case addTodos:
      let id = state.todos[state.todos.length - 1]?.id;
      if (!id) id = 1;
      else id++;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: id,
            name: action.name,
            checked: action.checked,
          },
        ],
      };
    case setChecked:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.id && item.checked)
            return { ...item, checked: false };
          else if (item.id === action.id && !item.checked)
            return { ...item, checked: true };
          else return { ...item };
        }),
      };

    default:
      return state;
  }
};

const addTodosAC = (name, checked) => ({
  type: addTodos,
  name,
  checked,
});

const setCheckedAC = (id) => ({
  type: setChecked,
  id,
});

export const setCheckedThunkCreator = (id) => (dispatch) => {
  dispatch(setCheckedAC(id));
};

export const addTodosThunkCreator = (name, checked) => async (dispatch) => {
  await dispatch(addTodosAC(name, checked));
};

export default todosReducer;
