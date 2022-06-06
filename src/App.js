import React from "react";
import TodoInputContainer from "./components/TodoInput/TodoInputContainer";
import TodoListContainer from "./components/TodoList/TodoListContainer";
import store from "./Redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <TodoInputContainer />
      <TodoListContainer />
    </div>
  );
}

export default function SamuraiJS() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
