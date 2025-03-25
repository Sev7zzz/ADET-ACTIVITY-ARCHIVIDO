import React, { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);

  const handleAddTodo = () => {
    if (todo === "") return;
    setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
    setTodo("");
  };

  const handleEditTodo = (todo) => {
    setEditedTodo(todo);
    setTodo(todo.title);
  };

  const handleDeleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleUpdateTodo = () => {
    setTodoList(
      todoList.map((item) =>
        item.id === editedTodo.id ? { ...item, title: todo } : item
      )
    );
    setEditedTodo(null);
    setTodo("");
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        setTodo,
        todoList,
        editedTodo,
        handleAddTodo,
        handleEditTodo,
        handleDeleteTodo,
        handleUpdateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
