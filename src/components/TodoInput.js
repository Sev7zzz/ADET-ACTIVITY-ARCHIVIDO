import React, { useContext } from "react";
import { TextInput } from "react-native";
import { TodoContext } from "../context/TodoContext";

const TodoInput = () => {
  const { todo, setTodo } = useContext(TodoContext);

  return (
    <TextInput
      style={{
        borderWidth: 2,
        borderColor: "#1e90ff",
        borderRadius: 6,
        padding: 12,
        marginTop: 10,
      }}
      placeholder="Add a task"
      value={todo}
      onChangeText={setTodo}
    />
  );
};

export default TodoInput;
