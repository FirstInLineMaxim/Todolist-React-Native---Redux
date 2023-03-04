import { Switch } from "@rneui/themed";
import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
} from "react-native";
import { useDispatch } from "react-redux";
import { setNotification } from "../../store/settingsSlice";
import { renderItem, renderSectionHeader } from "./SectionItems";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    flex: 1,
  },
  settings: {},
  sectionHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 5,
    marginTop: 5,
  },
  sectionIcon: {
    borderRadius: 15,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    backgroundColor: "#df6c36",
  },
  sectionTitle: {
    fontSize: 32,
  },
  item: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 2,
  },
  itemLast: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 2,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  itemFirst: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  itemNotification: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 24,
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
    <SafeAreaView style={styles.container}>
      <View>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
        />
      </View>
    </SafeAreaView>
  );
};
export default Settings;
