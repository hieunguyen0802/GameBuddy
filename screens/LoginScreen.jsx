import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>LoginScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
});
