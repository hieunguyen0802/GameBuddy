import { StyleSheet, Text, View } from "react-native";
import { DrawerItem, createDrawerNavigator } from "@react-navigation/drawer";
import { Icon } from "react-native-paper";
import { windowWidth } from "../utils/Dimensions";

import CustomDrawer from "../components/CustomDrawer";

import HomeScreen from "../screens/HomeScreen";
import MessageScreen from "../screens/MessageScreen";
import MomentScreen from "../screens/MomentScreen";
import SettingScreen from "../screens/SettingScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: windowWidth >= 768 ? "permanent" : "slide",
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
          fontFamily: "Roboto",
        },
        drawerActiveBackgroundColor: "#aa18ea",
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333"
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon source="home-outline" size={32} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon source="account-outline" size={32} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Message"
        component={MessageScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon source="chat-outline" size={32} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Moment"
        component={MomentScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon source="clock-outline" size={32} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon source="cog-outline" size={32} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({
  drawerText: {},
});
