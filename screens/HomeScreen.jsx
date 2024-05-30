import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useState } from "react";
import {
  Avatar,
  TextInput,
  Button,
  SegmentedButtons,
} from "react-native-paper";
import Carousel from "react-native-snap-carousel";
import { sliderData } from "../model/data";
import BannerSlider from "../components/BannerSlider";
import { windowWidth } from "../utils/Dimensions";
import { reloadAppAsync } from "expo";
import GameList from "../components/GameList";

const HomeScreen = () => {
  const [text, setText] = React.useState("");

  const [tabValue, setTabValue] = React.useState("free");
  const renderItem = ({ item, index }) => {
    return <BannerSlider data={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ padding: 20 }}>
        {/* Top Component */}
        <View style={styles.headerComponent}>
          <Text style={styles.textHeader}> Hello</Text>
          <Avatar.Image
            source={require("../assets/images/user-profile.jpg")}
            size={24}
          />
        </View>

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <TextInput
            value={text}
            mode="outlined"
            placeholder="Seach"
            onChangeText={(text) => setText(text)}
            style={{ backgroundColor: "#fff" }}
            left={<TextInput.Icon size={24} icon="magnify" />}
            outlineColor="pink"
          />
        </View>

        {/* title */}
        <View style={styles.title}>
          <Text>Upcoming games</Text>
          <Button
            mode="text"
            textColor="magenta"
            onPress={() => console.log("Pressed")}
          >
            See All
          </Button>
        </View>

        {/* carousel */}
        <View>
          <Carousel
            ref={(c) => {
              this._carousel = c;
            }}
            data={sliderData}
            renderItem={renderItem}
            sliderWidth={windowWidth - 30}
            itemWidth={300}
            loop={true}
          />
        </View>

        {/* tab section  */}
        <View>
          <SegmentedButtons
            style={styles.tabSection}
            value={tabValue}
            onValueChange={(e) => setTabValue(e)}
            buttons={[
              {
                value: "free",
                label: "Free Games",
                style: {
                  backgroundColor: tabValue === "free" ? "#D2649A" : "#50727B",
                },
                showSelectedCheck: true,
                onPress: console.log(tabValue),
              },
              {
                value: "paid",
                label: "Paid Games",
                style: {
                  backgroundColor: tabValue !== "free" ? "#D2649A" : "#50727B",
                },
                showSelectedCheck: true,
                onPress: console.log(tabValue),
              },
            ]}
          />
        </View>

        {/* game list based on filtered tab  */}
        <View>
          {tabValue === "free" ? (
            <GameList/>
          ) : (
            <Text>Paid Game</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  headerComponent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  textHeader: {
    fontSize: 20,
    fontFamily: "Roboto-Medium",
  },

  searchBar: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },

  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    padding: 10,
  },

  tabSection: {
    padding: 10,
    margin: 10,
    borderRadius: 0,
  },
});
