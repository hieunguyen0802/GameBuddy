import { StyleSheet, Text, View } from "react-native";
import React from "react";
import IndexScreen from "../screens/IndexScreen";
import LoginScreen from "../screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarHidden: true,
        tintColor: { color: "#fff" },
        statusBarColor: "white",
      }}
    >
      <Stack.Screen name="Index" component={IndexScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
 