import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { transform } from "@babel/core";
import { Icon, Button } from "react-native-paper";
import { useContext } from "react";

import LoginSVG from "../../assets/images/misc/login.svg";
import FacebookSVG from "../../assets/images/misc/facebook.svg";
import GoogleSVG from "../../assets/images/misc/google.svg";
import TwitterSVG from "../../assets/images/misc/twitter.svg";

import CustomFieldInput from "../../components/CustomFieldInput";
import CustomButton from "../../components/CustomButton";
import { AuthContext } from "../../context/AuthContext";


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const {login} = useContext(AuthContext)

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <View style={{ paddingHorizontal: 25 }}>
          <LoginSVG
            width={300}
            height={300}
            style={{ transform: [{ rotate: "-5deg" }] }}
          />
          <Text style={styles.loginText}>Login </Text>
          <CustomFieldInput
            fieldLabel="email"
            iconComponent={<Icon source="at" size={20} color="#666" />}
            keyboardType="email-address"
          />

          <CustomFieldInput
            fieldLabel="password"
            iconComponent={<Icon source="lock" size={20} color="#666" />}
            inputType="password"
            fieldButtonLabel="forgot"
            fieldButtonFunction={() => console.log("forgot")}
          />


          <CustomButton buttonLabel="Login" onPress={login} />

          <Text style={{ textAlign: "center", marginBottom: 30 }}>
            Or, login with ...
          </Text>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 30,
            }}
          >
            <TouchableOpacity
              onPress={() => console.log("google")}
              style={styles.svgStyle}
            >
              <GoogleSVG width={24} height={24} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => console.log("facebook")}
              style={styles.svgStyle}
            >
              <FacebookSVG width={24} height={24} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => console.log("twitter")}
              style={styles.svgStyle}
            >
              <TwitterSVG width={24} height={24} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 16 }}>New to the app ? </Text>
            <Button
              onPress={() => navigation.navigate("Register")}
              labelStyle={{
                color: "#AD40AF",
                fontSize: 18,
                fontWeight: "700",
                paddingVertical: 0,
              }}
            >
              Register
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  loginText: {
    fontFamily: "Roboto",
    fontSize: 28,
    fontWeight: "500",
    color: "#333",
    marginBottom: 30,
  },

  svgStyle : {
    borderColor: "#ddd",
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
  }
});
