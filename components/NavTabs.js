import { Tab } from "@rneui/themed";
import { useState } from "react";
import { Text } from "react-native";
import { Link, useNavigate } from "react-router-native";
function NavTabs() {
  function changePosition(e) {}
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  return (
    <>
      <Tab value={index} onChange={setIndex} dense>
        <Tab.Item>
          <Text>TODO</Text>
        </Tab.Item>
        <Tab.Item>
          <Text>Settings</Text>
        </Tab.Item>
      </Tab>
    </>
  );
}
export default NavTabs;
