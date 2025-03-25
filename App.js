import React from "react";
import TodoScreen from "../screen/TodoScreen";
import { TodoProvider } from "../context/TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <TodoScreen />
    </TodoProvider>
  );
};

export default App;
