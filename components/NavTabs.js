import { Tab } from "@rneui/themed";
import { useState } from "react";
function NavTabs() {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Tab value={index} onChange={setIndex} dense>
        <Tab.Item>Tab</Tab.Item>
        <Tab.Item>Tab</Tab.Item>
      </Tab>
    </>
  );
}
export default NavTabs;
