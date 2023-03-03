import React from "react";
import { Text, View } from "react-native";
import NavTabs from "./components/NavTabs";

const App = () => {
  return (
    <>
      <View style={""}>
        <Text>Try editing me! 🎉</Text>
      </View>
      <NavTabs />
    </>
  );
};

export default App;

const AppStyle = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
};
