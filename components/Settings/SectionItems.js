import { Switch, Text } from "@rneui/themed";
import { StatusBar, StyleSheet, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import { useDispatch, useSelector } from "react-redux";
import { setNotification } from "../../store/settingsSlice";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f1f1f1",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  settings: {
    marginHorizontal: 15,
  },
  sectionHeader: {
    flex: 1,
    flexDirection: "row",
    alignItems: "baseline",
    marginHorizontal: 15,
    marginBottom: 15,
    marginTop: 15,
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
    marginHorizontal: 15,
  },
  itemLast: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 2,
    marginHorizontal: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 15,
  },
  itemFirst: {
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 2,
    marginHorizontal: 15,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  itemNotification: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemAccount: {
    alignSelf: "flex-end",
    textAlign: "left",
    width: 150,
    padding: 5,
    borderBottomWidth: 1,
    borderColor: "#df6c36",
    fontSize: 20,
  },
  title: {
    fontSize: 24,
  },
});

const SettingsListSectionHeader = ({ title, icon }) => {
  return (
    <View style={styles.sectionHeader}>
      <View style={styles.sectionIcon}>
        <Icon name={icon} size={30} color="#fff" />
      </View>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );
};
//SectionHeader Component
const renderSectionHeader = ({ section: { title, icon } }) => {
  return <SettingsListSectionHeader icon={icon} title={title} />;
};
const renderItem = ({ item, index, section }) => {
  const isFirstElement = index === 0;
  const isLastElement = index === section.data.length - 1;
  return (
    <View
      style={
        isLastElement
          ? styles.itemLast
          : isFirstElement
          ? styles.itemFirst
          : styles.item
      }
      isFirstElement={isFirstElement}
      isLastElement={isLastElement}
    >
      <View style={styles.itemNotification}>
        <Text style={styles.title}>{item.title}</Text>
        {section.title === "Notifications" && (
          <NotificationSwitch name={item.type} />
        )}
        {section.title === "Account" && (
          <AccountInput placeholder={item.title} type={item.type} />
        )}
      </View>
    </View>
  );
};

//Handels the Notification state
function NotificationSwitch({ name }) {
  const dispatch = useDispatch();
  const setChecked = () => dispatch(setNotification(name));

  const { notifications } = useSelector((state) => state.settings);
  const { checked } = notifications.find((entry) => entry.name === name);

  return <Switch name={name} value={checked} onValueChange={setChecked} />;
}
//Handels the Account State
function AccountInput({ placeholder, type }) {
  const dispatch = useDispatch();
  const { account } = useSelector((state) => state.settings);
  console.log(account[type]);
  //   const value = account.find((entry) => entry === type);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <TextInput
        selectionColor={"#df6c36"}
        style={styles.itemAccount}
        value={account[type]}
        placeholder={placeholder}
      />
    </View>
  );
}
export { renderItem, renderSectionHeader, SettingsListSectionHeader };
