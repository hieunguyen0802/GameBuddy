import { StyleSheet, Text, View } from "react-native";
import React from "react";

const GameDetailsScreen = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text>GameDetailsScreen</Text>
      <Text>{route.params?.data?.title}</Text>
    </View>
  );
};

export default GameDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
