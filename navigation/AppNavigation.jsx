import { View, Text } from "react-native";
import React, { useContext } from "react";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";
import { AuthContext } from "../context/AuthContext";
import { ActivityIndicator } from "react-native-paper";

const AppNavigation = () => {
  const { isLoading, userToken } = useContext(AuthContext);

  if (isLoading) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator animating={true} color="red" />
    </View>;
  }

  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaProvider>
          {userToken !== null ? <AppStack /> : <AuthStack />}
        </SafeAreaProvider>
      </PaperProvider>
    </NavigationContainer>
  );
};

export default AppNavigation;
