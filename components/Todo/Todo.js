import { Button, Icon, ListItem, Text } from "@rneui/themed";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import TaskItem from "./TaskItem";
import { StyleSheet } from "react-native";
import InputKeyboard from "../InputKeyboard";
import { useDispatch, useSelector } from "react-redux";
import { delTask, setChecked, setTasks } from "../../store/todoSlice";
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
  headingContainer: {
    justifyContent: "space-between",
  },
  subtitle: {
    marginLeft: 20,
    fontWeight: "300",
    color: "#cfd2d5",
  },
  subtitleTasks: {
    marginLeft: 20,
    fontWeight: "300",
    color: "#cfd2d5",
  },
  subtitleView: {
    flexDirection: "row",
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
  function deleteEntry(id) {
    console.log("deleteEntry");
    dispatch(delTask(id));
  }
  function handleCheck(id) {
    dispatch(setChecked(id));
  }
  const openTasks = () => {
    const doneTasks = tasks.filter((ele) => ele.checked === true);
    const leftOverTasks = tasks.length - doneTasks.length;
    return { done: leftOverTasks, total: tasks.length };
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading} onPress={addTask}>
            TODO LIST
          </Text>
          <View style={styles.subtitleView}>
            <Text style={styles.subtitle}>Open Tasks:</Text>
            <Text style={styles.subtitleTasks}>
              {openTasks().done}/{openTasks().total}
            </Text>
          </View>
        </View>

        <ScrollView style={styles.container}>
          {tasks
            .map((entry) => (
              <TaskItem
                key={entry.id}
                deleteEntry={deleteEntry}
                handleCheck={handleCheck}
                data={entry}
              />
            ))
            .reverse()}
        </ScrollView>
        <InputKeyboard addTask={addTask} />
      </View>
    </>
  );
}
