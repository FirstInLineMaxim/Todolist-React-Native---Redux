import { Input, Text } from "@rneui/themed";
import React, { useState } from "react";
import { FlatList, KeyboardAvoidingView, ScrollView, View } from "react-native";
import TaskItem from "./TaskItem";
import { StyleSheet } from "react-native";
import InputKeyboard from "../InputKeyboard";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    color: "#000",
    fontSize: 20,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
});
export default function Todo() {
  const [tasks, setTasks] = useState([
    { id: 1, task: "asdasd", checked: true },
    { id: 2, task: "asdasd", checked: true },
    { id: 3, task: "asdasd", checked: false },
  ]);
  function addTask(task) {
    const useIds = tasks.map((entry) => entry.id);
    //Checks what the biggest Id in the Array
    const nextIndex = Math.max(...useIds) + 1;
    setTasks((prev) => [
      ...prev,
      { id: nextIndex, task: task, checked: false },
    ]);
  }
  function handleCheck(id) {
    setTasks(
      tasks.map((entry) => {
        if (entry.id === id) {
          // Create a *new* object with changes
          return { ...entry, checked: !entry.checked };
        } else {
          // No changes
          return entry;
        }
      })
    );
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>TODO LIST</Text>
        <ScrollView style={styles.container}>
          {tasks.map((entry) => (
            <TaskItem key={entry.id} handleCheck={handleCheck} data={entry} />
          ))}
        </ScrollView>
        <InputKeyboard addTask={addTask} />
      </View>
    </>
  );
}
