import React from "react";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { NativeRouter, Route, Routes } from "react-router-native";
import NavTabs from "./components/NavTabs";
import Settings from "./components/Settings/Settings";
import Todo from "./components/Todo/Todo";

const App = () => {
  return (
    <NativeRouter>
      <Provider store={store}>
        <View style={AppStyle}>
          <NavTabs />
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </View>
      </Provider>
    </NativeRouter>
  );
};

export default App;

const AppStyle = {
  top: 40,
  flex: 1,
};
