import React, { useContext } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "../components/TodoItem";
import TodoInput from "../components/TodoInput";

const TodoScreen = () => {
  const { todoList, editedTodo, handleAddTodo, handleUpdateTodo } =
    useContext(TodoContext);

  return (
    <View style={{ marginHorizontal: 16 }}>
      <Text
        style={{
          marginTop: 50,
          backgroundColor: "orange",
          padding: 10,
          borderRadius: 6,
          color: "#fff",
          fontWeight: "500",
          fontSize: 20,
        }}
      >
        Archivido ADET Activity
      </Text>
      <TodoInput />
      <TouchableOpacity
        style={{
          backgroundColor: "#000",
          borderRadius: 6,
          padding: 8,
          marginVertical: 34,
          alignItems: "center",
        }}
        onPress={editedTodo ? handleUpdateTodo : handleAddTodo}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
          {editedTodo ? "Save" : "Add"}
        </Text>
      </TouchableOpacity>
      <FlatList
        data={todoList}
        renderItem={({ item }) => <TodoItem item={item} />}
      />
    </View>
  );
};

export default TodoScreen;
