import { Text } from "@rneui/themed";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import TaskItem from "./TaskItem";
import { StyleSheet } from "react-native";
import InputKeyboard from "../InputKeyboard";
import { useDispatch, useSelector } from "react-redux";
import { setChecked, setTasks } from "../../store/todoSlice";
/**
 * TODO:Make the list items swipable as a bonus
 * https://reactnativeelements.com/docs/components/listItem_swipeable#props
 */
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
  //the State of our Redux todo
  const tasks = useSelector((state) => state.todo);
  // dispatch a Reducer which handels the state
  const dispatch = useDispatch();

  const addTask = (task) => {
    const useIds = tasks.map((entry) => entry.id);
    //Checks what the biggest Id in the Array
    const nextIndex = () => {
      //Check if task are present
      if (useIds.length === 0) return 0;
      //handels if tasks get removed so it always return highest value
      else return Math.max(...useIds) + 1;
    };
    dispatch(setTasks({ id: nextIndex(), task: task, checked: false }));
  };
  function handleCheck(id) {
    dispatch(setChecked(id));
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading} onPress={addTask}>
          TODO LIST
        </Text>
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
