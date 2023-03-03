import { Icon } from "@rneui/base";
import { Tab } from "@rneui/themed";
import { useState } from "react";
import { Text } from "react-native";
import { useNavigate } from "react-router-native";

//switch statement that uses tab index to return the path
const getPath = (index) => {
  switch (index) {
    case 0:
      return "/";
    case 1:
      return "/settings";
    default:
      return;
  }
};
function NavTabs() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  //funktion to switch Paths
  function changePosition(e) {
    navigate(getPath(e));
    setIndex(e);

    console.log("hello world");
  }

  return (
    <>
      <Tab value={index} onChange={(e) => changePosition(e)} dense>
        <Tab.Item
          type="outline"
          disabledStyle={{
            borderWidth: 2,
            borderColor: "#00F",
          }}
          disabledTitleStyle={{ color: "#00F" }}
          linearGradientProps={null}
          iconContainerStyle={{ background: "#000" }}
          loadingProps={{ animating: true }}
          loadingStyle={{}}
          title="Hello"
          titleProps={{}}
        >
          <Text>Todo's</Text>
        </Tab.Item>
        <Tab.Item
          type="outline"
          disabledStyle={{
            borderWidth: 2,
            borderColor: "#00F",
          }}
          disabledTitleStyle={{ color: "#00F" }}
          linearGradientProps={null}
          iconContainerStyle={{ background: "#000" }}
          loadingProps={{ animating: true }}
          loadingStyle={{}}
          title="Hello"
          titleProps={{}}
        >
          <Text>Settings</Text>
        </Tab.Item>
      </Tab>
    </>
  );
}
export default NavTabs;
