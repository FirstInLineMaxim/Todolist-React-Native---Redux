import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  SectionList,
  ScrollView,
} from "react-native";
import NavTabs from "../NavTabs";
import {
  renderItem,
  renderSectionHeader,
  SettingsListSection,
  SettingsListSectionHeader,
} from "./SectionItems";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    flex: 1,
  },
});

const Settings = () => {
  //Creating objects in data to pass through information for redux
  const DATA = [
    {
      title: "Account",
      icon: "feed-person",
      data: [
        { title: "Username", type: "username" },
        { title: "Firstname", type: "firstname" },
        { title: "Lastname", type: "lastname" },
        { title: "Email", type: "email" },
        { title: "Phone", type: "phone" },
      ],
    },
    {
      title: "Notifications",
      icon: "bell",
      data: [
        { title: "Push Notifications", type: "PUSH" },
        { title: "SMS Notifications", type: "SMS" },
        { title: "Email Notifications", type: "EMAIL" },
      ],
    },
  ];
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {DATA.map((item, i) => (
            <SettingsListSection
              key={i}
              section={item}
              title={item.title}
              icon={item.icon}
              item={item.data}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default Settings;
