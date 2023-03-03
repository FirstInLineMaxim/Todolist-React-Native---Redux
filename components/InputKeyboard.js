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
    addTask(input);
    setInput("");
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Whats on your mind"
              style={styles.input}
              onChangeText={(e) => setInput(e)}
              onSubmitEditing={() => handleSubmit()}
              value={input}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.2,
  },
  input: {
    paddingLeft: 15,
    paddingRight: 15,
    width: "100%",
    color: "#000",
  },
});
export default InputKeyboard;
