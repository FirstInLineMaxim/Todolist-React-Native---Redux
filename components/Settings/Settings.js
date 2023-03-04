import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from "react-native";
import { Icon } from "react-native-vector-icons/Octicons";

const DATA = [
  {
    title: "Account",
    icon: "feed-person",
    data: ["Username", "Firstname", "Lastname"],
  },
  {
    title: "Notifications",
    icon: "bell",
    data: [
      "Allow Push Notifications",
      "Allow SMS Notifications",
      "Allow EMAIl Notifications",
    ],
  },
];
const SettingsListSectionHeader = ({ title, icon }) => {
  <View>
    <Icon name={icon} size={30} color="#900" />
    <Text>{title}</Text>
  </View>;
};
//SectionHeader Component
const renderSectionHeader = ({ section: { title, icon } }) => {
  return <SettingsListSectionHeader icon={icon} title={title} />;
};
const renderItem = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item}</Text>
  </View>
);
const Settings = () => (
  <SafeAreaView style={styles.container}>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});

export default Settings;
