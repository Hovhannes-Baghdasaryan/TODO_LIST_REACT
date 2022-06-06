import React from "react";
import TodoInput from "./TodoInput";
import { connect } from "react-redux";
import { addTodosThunkCreator } from "./../../Redux/Reducers/todosReducer";

function TodoInputContainer(props) {
  return <TodoInput addTodo={props.addTodosThunkCreator} />;
}

export default connect(null, { addTodosThunkCreator })(TodoInputContainer);
