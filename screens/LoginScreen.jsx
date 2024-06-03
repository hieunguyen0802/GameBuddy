import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import LoginSVG from "../assets/images/misc/login.svg";
import FacebookSVG from "../assets/images/misc/facebook.svg";
import GoogleSVG from "../assets/images/misc/google.svg";
import TwitterSVG from "../assets/images/misc/twitter.svg";
import { transform } from "@babel/core";
import {TextInput} from 'react-native-paper'

const LoginScreen = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <LoginSVG
          width={300}
          height={300}
          style={{ transform: [{ rotate: "-5deg" }] }}
        />
        <Text style={styles.loginText}>Login </Text>
      </View>
      <View>
        <TextInput
          label="email"
          mode="outlined"
          value={email}
          onChangeText={(email) => setEmail(email)}
          style={styles.emailInput}
          outlineStyle={styles.textOutline}
          left={<TextInput.Icon icon="at" />}
          keyboardType="email-address"
        />
      </View>

      <View style={{flexDirection:'row'}}> 
        <TextInput
          mode="outlined"
          placeholder="password"
          value={password}
          onChangeText={password => setPassword(password)}
          style= {styles.passwordInput}
          outlineStyle={styles.textOutline}
          secureTextEntry={true}
          left={<TextInput.Icon icon="lock" />}
          right={<TextInput.Affix text="help" onPress={() => alert("hihi")} /> }
        />
         
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
  },

  emailInput: {
    borderWidth: 0,
    marginHorizontal: 20,
    marginVertical: 10,
    borderBottomWidth: 1,
  },

  passwordInput: {
    borderWidth: 0,
    marginHorizontal: 20,
    marginVertical: 10,
    borderBottomWidth: 1,
    flex: 1,
  },

  textOutline: {
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  forgotText: {
    color: "#AD40AF",
    fontWeight: "700",
  },

  forgotButton: {
    marginVertical: 30,
  },
});
