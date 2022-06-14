import React from "react";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import {
  setCheckedThunkCreator,
  setValueThunkCreator,
  deleteValueThunkCreator,
} from "./../../Redux/Reducers/todosReducer";

function TodoListContainer(props) {
  return (
    <TodoList
      todos={props.todoList}
      setChecked={props.setCheckedThunkCreator}
      setValue={props.setValueThunkCreator}
      deleteValue={props.deleteValueThunkCreator}
    />
  );
}

let mapStateToProps = (state) => ({
  todoList: state.todosList.todos,
});

export default connect(mapStateToProps, {
  setCheckedThunkCreator,
  setValueThunkCreator,
  deleteValueThunkCreator,
})(TodoListContainer);
