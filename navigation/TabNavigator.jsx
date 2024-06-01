import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-paper";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/BottomTab/CartScreen";
import FavoriteScreen from "../screens/BottomTab/FavoriteScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GameDetailsScreen from "../screens/GameDetailsScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const cartNumber = 5;

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        options={({ route }) => ({
          title: route.params?.data.title,
        })}
      />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: "#D2649A" },
        tabBarActiveTintColor: "yellow",
        tabBarInactiveTintColor: "#fff",
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={({ route }) => ({
          tabBarIcon: ({ color, size }) => (
            <Icon source="home-outline" color={color} size={size} />
          ),
          tabBarStyle: {
            display: getTabBarVisibility(route),
            backgroundColor: "#D2649A",
          },
        })}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon source="heart-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon source="cart-outline" color={color} size={size} />
          ),
          tabBarBadge: cartNumber,
          tabBarBadgeStyle: { backgroundColor: "yellow" },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
  if (routeName === "GameDetails") {
    return "none";
  }
  return "flex";
};

const styles = StyleSheet.create({});
