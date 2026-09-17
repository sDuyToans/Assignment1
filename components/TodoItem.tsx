import { View, Text, StyleSheet } from "react-native";

type TodoProp = {
  todo: string;
};

const TodoItem = ({ todo }: TodoProp) => {
  return (
    <View style={styles.todo}>
      <Text style={styles.description}>- {todo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todo: {
    marginTop: 10,
  },
  description: {
    flex: 1,
    fontSize: 14,
  },
});

export default TodoItem;
