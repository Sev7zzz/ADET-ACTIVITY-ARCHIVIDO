import React, { useContext } from "react";
import { View, Text } from "react-native";
import { IconButton } from "react-native-paper";
import { TodoContext } from "../context/TodoContext";

const TodoItem = ({ item }) => {
  const { handleEditTodo, handleDeleteTodo } = useContext(TodoContext);

  return (
    <View
      style={{
        backgroundColor: "#1e90ff",
        padding: 12,
        marginBottom: 12,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 6,
      }}
    >
      <Text style={{ color: "#fff", flex: 1, fontSize: 15, fontWeight: "800" }}>
        {item.title}
      </Text>
      <IconButton
        icon="pencil"
        iconColor="#fff"
        onPress={() => handleEditTodo(item)}
      />
      <IconButton
        icon="trash-can"
        iconColor="#fff"
        onPress={() => handleDeleteTodo(item.id)}
      />
    </View>
  );
};

export default TodoItem;
