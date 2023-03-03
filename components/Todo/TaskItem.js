import { ListItem } from "@rneui/base";
import { Text } from "@rneui/themed";
import React from "react";
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  done: {
    textDecorationLine: "line-through",
    color: "grey",
  },
});
export default function TaskItem({ index, task }) {
  return (
    <View>
      <ListItem value="test" bottomDivider onPress={(e) => console.log(e)}>
        <ListItem.CheckBox
          // Use ThemeProvider to change the defaults of the checkbox
          iconType="material-community"
          checkedIcon="checkbox-marked"
          uncheckedIcon="checkbox-blank-outline"
          // checked={checked[0]}
        />
        <ListItem.Content>
          <ListItem.Title style={styles.done}>{task}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </View>
  );
}
