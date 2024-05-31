import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Button } from "react-native-paper";
import GamingImg from "../assets/images/misc/gaming.svg";
import { transform } from "react-native-svg-transformer";

const IndexScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.titleText}>GAME BUDDY </Text>
      </View>
      <View style={styles.container}>
        <GamingImg
          width={300}
          height={300}
          style={{ transform: [{ rotate: "-15deg" }] }}
        />
      </View>
      <View style={{marginBottom:50, width: '90%'}}>
        <Button
          icon="arrow-right"
          onPress={() => navigation.navigate("Login")}
          contentStyle={styles.button}
          buttonColor="#AD40AF"
          mode="contained"
          textColor="white"
          labelStyle={styles.buttonText}
        >
          Get started
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#20315f",
    fontFamily: "Inter-Bold",
  },

  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    fontFamily: "Roboto-MediumItalic",
  },
  button: {
    flexDirection: "row-reverse",
    padding: 15,
    justifyContent: "space-between",
    borderRadius: 5,
  },
});
