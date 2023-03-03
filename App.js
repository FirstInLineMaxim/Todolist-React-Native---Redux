import React from "react";
import { Text, View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";
import NavTabs from "./components/NavTabs";
import Settings from "./components/Settings/Settings";
import Todo from "./components/Todo/Todo";

const App = () => {
  return (
    <NativeRouter>
      <View style={AppStyle}>
        <NavTabs />
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </View>
    </NativeRouter>
  );
};

export default App;

const AppStyle = {
  top: 40,
};
