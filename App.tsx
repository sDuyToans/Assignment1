import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Course from "./components/Course";

export default function App() {
  const tasksSYST35300 = [
    { id: 1, todo: "Create docs file and code base" },
    { id: 2, todo: "Finish React Component part" },
  ];
  const tasksSYST28951 = [
    { id: 1, todo: "Sign team contract" },
    { id: 2, todo: "Email the contract to other members" },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Assignment 1</Text>
      <View style={styles.card}>
        <Text style={styles.title}>Todo List</Text>
        <Course courseName="SYST35300" tasks={tasksSYST35300} />
        <Course courseName="SYST28951" tasks={tasksSYST28951} />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bab8b8",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    padding: 60,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "blue",
    marginBottom: 50,
  },
});
