import { View, Text, StyleSheet } from "react-native";
import TodoItem from "./TodoItem";

type Task = {
  id: number;
  todo: string;
};

type CourseProps = {
  courseName: string;
  tasks: Task[];
};

const Course = ({ courseName, tasks }: CourseProps) => {
  return (
    <View style={styles.courseContainer}>
      <Text style={styles.courseHeader}>{courseName}</Text>
      {tasks.map((t) => (
        <TodoItem key={t.id} todo={t.todo} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  courseContainer: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "green",
    borderRadius: 10,
    padding: 16,
  },
  courseHeader: {
    fontSize: 16,
    fontWeight: "medium",
    color: "red",
  },
});

export default Course;
