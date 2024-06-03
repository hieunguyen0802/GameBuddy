import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IndexScreen from "../screens/IndexScreen";
import LoginScreen from "../screens/AuthScreens/LoginScreen";
import RegisterScreen from "../screens/AuthScreens/RegisterScreen";

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
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
 