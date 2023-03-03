import { ListItem } from "@rneui/base";
import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  done: {
    textDecorationLine: "line-through",
    color: "grey",
  },
});
export default function TaskItem({ data, handleCheck }) {
  return (
    <ListItem value="test" bottomDivider>
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
    </ListItem>
  );
}
