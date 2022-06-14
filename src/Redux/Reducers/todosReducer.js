const addTodos = "addTodos";
const setChecked = "setChecked";
const setValue = "setValue";
const DeleteValue = "DeleteValue";

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

    case setValue:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.id)
            return { id: action.id, name: action.value, checked: false };
          return { ...item };
        }),
      };

    case DeleteValue:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.id),
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
const setValueAC = (value, id) => ({
  type: setValue,
  value,
  id,
});
const deleteValueAC = (id) => ({ type: DeleteValue, id });

export const setCheckedThunkCreator = (id) => (dispatch) => {
  dispatch(setCheckedAC(id));
};
export const addTodosThunkCreator = (name, checked) => (dispatch) => {
  dispatch(addTodosAC(name, checked));
};
export const setValueThunkCreator = (value, id) => (dispatch) => {
  dispatch(setValueAC(value, id));
};

export const deleteValueThunkCreator = (id) => (dispatch) => {
  dispatch(deleteValueAC(id));
};

export default todosReducer;
