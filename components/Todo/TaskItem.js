import { ListItem } from "@rneui/base";
import { Button } from "@rneui/themed";
import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  done: {
    textDecorationLine: "line-through",
    color: "grey",
  },
});
export default function TaskItem({ data, handleCheck, deleteEntry }) {
  return (
    <ListItem.Swipeable
      leftContent={(reset) => (
        <Button
          title="Info"
          onPress={() => reset()}
          icon={{ name: "info", color: "white" }}
          buttonStyle={{ minHeight: "100%" }}
        />
      )}
      rightContent={(reset) => (
        <Button
          title="Delete"
          onPress={() => deleteEntry(data.id)}
          icon={{ name: "delete", color: "white" }}
          buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
        />
      )}
    >
      <ListItem.CheckBox
        // Use ThemeProvider to change the defaults of the checkbox
        // onPress={() => setTask()}
        iconType="material-community"
        checkedIcon="checkbox-marked"
        uncheckedIcon="checkbox-blank-outline"
        onPress={() => handleCheck(data.id)}
        checked={data.checked}
      />
      <ListItem.Content>
        <ListItem.Title style={data.checked && styles.done}>
          {data.task}
        </ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem.Swipeable>
  );
}
