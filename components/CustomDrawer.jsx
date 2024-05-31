import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Avatar } from "react-native-paper";
import { Icon, Button } from "react-native-paper";

const CustomDrawer = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawContent}
      >
        <ImageBackground
          source={require("../assets/images/menu-bg.jpeg")}
          style={{ padding: 20 }}
        >
          <Avatar.Image
            source={require("../assets/images/user-profile.jpg")}
            size={64}
            style={{ marginBottom: 10 }}
          />
          <Text style={styles.userNameText}> User Name</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.coinText}> 100 Points </Text>
            <Icon source="star-four-points" size={16} color="white" />
          </View>
        </ImageBackground>

        <View style={styles.middleDrawer}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomDrawer}>
        <Button
          icon="share-variant"
          mode="text"
          contentStyle={styles.buttonBottomStyle}
          labelStyle={styles.buttonTextDrawer}
          onPress={() => console.log("Pressed")}
        >
          Share a friend
        </Button>
        <Button
          icon="arrow-expand-left"
          mode="text"
          contentStyle={styles.buttonBottomStyle}
          labelStyle={styles.buttonTextDrawer}
          onPress={() => console.log("Pressed")}
        >
          Sign out
        </Button>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  drawContent: {
    backgroundColor: "#8200d6",
  },

  userNameText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Roboto",
    marginBottom: 5,
  },

  coinText: {
    color: "white",
    fontFamily: "Roboto",
    marginRight: 5,
  },

  middleDrawer: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 10,
  },

  bottomDrawer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  buttonBottomStyle: {
    justifyContent:"flex-start"
  },

  buttonTextDrawer: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Roboto",
    paddingLeft: 25
  }

});
