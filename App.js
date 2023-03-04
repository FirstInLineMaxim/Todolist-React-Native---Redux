import React from "react";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { NativeRouter, Route, Routes } from "react-router-native";
import NavTabs from "./components/NavTabs";
import Settings from "./components/Settings/Settings";
import Todo from "./components/Todo/Todo";
import { store } from "./store/configureStore";
const App = () => {
  return (
    <NativeRouter>
      <Provider store={store}>
        <SafeAreaView style={AppStyle}>
          <NavTabs />
          <Routes>
            <Route path="/" element={<Todo />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </SafeAreaView>
      </Provider>
    </NativeRouter>
  );
};

export default App;

const AppStyle = {
  top: 40,
  flex: 1,
};
