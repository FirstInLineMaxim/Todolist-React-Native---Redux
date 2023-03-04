import { Switch, Text } from "@rneui/themed";
import { StatusBar, StyleSheet, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import { useDispatch, useSelector } from "react-redux";
import { setAccount, setNotification } from "../../store/settingsSlice";
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

    borderBottomWidth: 1,
    borderColor: "#df6c36",
    fontSize: 20,
  },
  title: {
    fontSize: 24,
  },
});

//Renders the Sections
const SettingsListSection = ({ title, icon, item, section }) => {
  return (
    <>
      <View style={styles.sectionHeader}>
        <View style={styles.sectionIcon}>
          <Icon name={icon} size={30} color="#fff" />
        </View>
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
      {item.map((ele, i) => (
        <RenderItem key={i} item={ele} index={i} section={section} />
      ))}
    </>
  );
};
//SectionHeader Component

const RenderItem = ({ item, index, section }) => {
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
          <NotificationSwitch type={item.type} />
        )}
        {section.title === "Account" && (
          <AccountInput placeholder={item.title} type={item.type} />
        )}
      </View>
    </View>
  );
};

//Handels the Notification state
function NotificationSwitch({ type }) {
  const dispatch = useDispatch();
  const { notifications } = useSelector((state) => state.settings);
  //Handels Notifications
  const setChecked = (type) => dispatch(setNotification(type));

  const { checked } = notifications.find((entry) => entry.name === type);

  return <Switch value={checked} onValueChange={() => setChecked(type)} />;
}

function AccountInput({ placeholder, type }) {
  const dispatch = useDispatch();
  const { account } = useSelector((state) => state.settings);
  //Handels Notifications
  const setAccountInfo = (type, value) => dispatch(setAccount(type, value));
  const value = account[type];
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <TextInput
        value={value}
        onChangeText={(value) => setAccountInfo({ type, value })}
        selectionColor={"#df6c36"}
        style={styles.itemAccount}
        placeholder={placeholder}
      />
    </View>
  );
}
export { RenderItem, SettingsListSection };
