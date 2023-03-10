import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { Provider } from "react-redux";
import { NativeRouter, Route, Routes } from "react-router-native";
import Login from "./components/Login/Login";
import NavTabs from "./components/NavTabs";
import Settings from "./components/Settings/Settings";
import Todo from "./components/Todo/Todo";
import { store } from "./store/configureStore";
const App = () => {
  return (
    <NativeRouter>
      <Provider store={store}>
        <SafeAreaView style={AppStyle}>
          {/* <NavTabs /> */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="app" element={<NavTabs />}>
              <Route index element={<Todo />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </SafeAreaView>
      </Provider>
    </NativeRouter>
  );
};

export default App;

const AppStyle = {
  paddingTop: StatusBar.currentHeight,
  flex: 1,
};
