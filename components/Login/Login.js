import { Button, Image, Text } from "@rneui/themed";
import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Navigate, useNavigate } from "react-router-native";
import loginScreenImage from "../../assets/loginScreen.jpg";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  heading: {
    textAlign: "center",
    color: "#fff",
  },
});
export default function Login() {
  const navigate = useNavigate();
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageContainer} source={loginScreenImage}>
        <Text h1 style={styles.heading}>
          Welcome to your Todo List
        </Text>

        <Button type="solid" onPress={() => navigate("/todo")}>
          Login
        </Button>
      </ImageBackground>
    </View>
  );
}
