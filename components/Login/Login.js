import { Button, Image, Input, Text } from "@rneui/themed";
import React from "react";
import { Dimensions, Keyboard } from "react-native";
import {
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-native";
import loginScreenImage from "../../assets/loginScreen.jpg";
import { setAccount } from "../../store/settingsSlice";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: 20,
    position: "absolute",
    left: 0,
    top: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  heading: {
    marginTop: 15,
    textAlign: "center",
    color: "#fff",
  },
  loginButton: {
    width: 30,
    padding: 20,
  },
  secondaryHeading: {
    color: "#fff",
  },
  subtitle: {
    color: "#fff",
  },
});
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setAccountInfo = (type, value) => dispatch(setAccount(type, value));
  const { account } = useSelector((state) => state.settings);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          style={styles.imageContainer}
          blurRadius={0}
          source={loginScreenImage}
        >
          <Text h1 style={styles.heading}>
            Todoist!
          </Text>
          <View>
            <Text h2 style={styles.secondaryHeading}>
              Login
            </Text>
            <Text style={styles.secondaryHeading}>Subtitle</Text>
          </View>

          <View style={{}}>
            <Input
              value={account.phone}
              onChangeText={(value) => setAccountInfo({ type: "phone", value })}
              containerStyle={{
                backgroundColor: "#fff",
                opacity: 0.8,
                marginBottom: 10,
                borderTopStartRadius: 15,
                borderTopEndRadius: 15,
              }}
              keyboardType="numeric"
              placeholder="Phonenummber"
              leftIcon={{ type: "material", name: "smartphone" }}
            />
            <Input
              value={account.username}
              onChangeText={(value) =>
                setAccountInfo({ type: "username", value })
              }
              containerStyle={{
                backgroundColor: "#fff",
                opacity: 0.8,
                borderBottomEndRadius: 15,
                borderBottomStartRadius: 15,
              }}
              placeholder="Name"
              leftIcon={{ type: "octicon", name: "person" }}
            />
          </View>

          <Button
            title="LOG IN"
            buttonStyle={{
              backgroundColor: "black",
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 30,
            }}
            containerStyle={{
              width: 200,
              alignSelf: "center",
              marginVertical: 10,
            }}
            onPress={() => navigate("/todo")}
            titleStyle={{ fontWeight: "bold" }}
          />
        </ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}
