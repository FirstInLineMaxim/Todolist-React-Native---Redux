import { ListItem } from "@rneui/base";
import { Button } from "@rneui/themed";
import React from "react";
import { StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  undone: {
    color: "black",
  },
  done: {
    textDecorationLine: "line-through",
    color: "grey",
  },
});
export default function TaskItem({
  data,
  handleCheck,
  deleteEntry,
  editEntry,
}) {
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
        iconType="material-community"
        checkedIcon="checkbox-marked"
        uncheckedIcon="checkbox-blank-outline"
        onPress={() => handleCheck(data.id)}
        checked={data.checked}
      />
      <ListItem.Content>
        <TextInput
          onBlur={() => console.log("focus lost")}
          value={data.task}
          onChangeText={(e) => editEntry(data.id, e)}
          style={data.checked ? styles.done : styles.undone}
          editable={data.checked ? false : true}
        />
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem.Swipeable>
  );
}
