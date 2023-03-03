import React, { useState } from "react";
import { Text } from "react-native";

import { ListItem } from "@rneui/themed";
import TaskItem from "./TaskItem";
export default function Todo() {
  const [checked, setChecked] = useState({ task: "", checked: "" });
  return (
    <>
      <TaskItem index="1" task="test" />
    </>
  );
}
