import { AppRegistry } from "react-native";
import React from "react";
import App from "./App";
import { name as appName } from "./app.json";

//Redux Setup
import { Provider } from "react-redux";
import { store } from "./store/configureStore";

const RNRedux = () => (
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

AppRegistry.registerComponent(appName, () => RNRedux);
