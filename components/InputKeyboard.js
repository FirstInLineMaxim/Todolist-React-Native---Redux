import { Button, Icon } from "@rneui/themed";
import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
const InputKeyboard = ({ addTask }) => {
  const [input, setInput] = useState();
  const handleSubmit = () => {
    if (input !== "") {
      addTask(input);
      setInput("");
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inputContainer}>
            <TextInput
              selectionColor={"#df6c36"}
              placeholder="Whats on your mind"
              style={styles.input}
              onChangeText={(e) => setInput(e)}
              onSubmitEditing={() => handleSubmit()}
              value={input}
            />

            <Icon
              style={styles.add}
              name="add-circle"
              type="Ionicons"
              color="#df6c36"
              onPress={() => handleSubmit()}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    padding: 10,
    color: "#000",
  },
  add: { flex: 1, justifyContent: "center", padding: 10 },
});
export default InputKeyboard;
