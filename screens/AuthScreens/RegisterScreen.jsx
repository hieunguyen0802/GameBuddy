import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
} from "react-native";
import { Icon, Button } from "react-native-paper";
import React, { useState } from "react";
import { transform } from "@babel/core";
import DatePicker from 'react-native-modern-datepicker';

import RegisterSVG from "../../assets/images/misc/registration.svg";
import FacebookSVG from "../../assets/images/misc/facebook.svg";
import GoogleSVG from "../../assets/images/misc/google.svg";
import TwitterSVG from "../../assets/images/misc/twitter.svg";

import CustomFieldInput from "../../components/CustomFieldInput";
import CustomButton from "../../components/CustomButton";
import { windowWidth } from "../../utils/Dimensions";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [selectedDate, setSelectedDate] = useState('');
  const [open, setOpen] = useState(false)



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ paddingHorizontal: 25 }}>
        <View style={{ alignItems: "center" }}>
          <RegisterSVG
            width={300}
            height={300}
            style={{ transform: [{ rotate: "-5deg" }] }}
          />
          <Text style={styles.loginText}>Register </Text>

          <View
            style={{
              flexDirection: "row",
              marginBottom: 10,
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
              marginBottom: 30,
            }}
          >
            <Text style={{ fontSize: 16 }}>Already registered ? </Text>
            <Button
              onPress={() => navigation.goBack()}
              labelStyle={{
                color: "#AD40AF",
                fontSize: 18,
                fontWeight: "700",
                paddingVertical: 0,
              }}
            >
              Login
            </Button>
          </View>

          <CustomFieldInput
            fieldLabel="Full Name"
            iconComponent={<Icon source="account" size={20} color="#666" />}
          />

      
          <CustomFieldInput
            fieldLabel="email"
            iconComponent={<Icon source="at" size={20} color="#666" />}
            keyboardType="email-address"
          />

          <CustomFieldInput
            fieldLabel="password"
            iconComponent={<Icon source="lock" size={20} color="#666" />}
            inputType="password"
          />

          <CustomFieldInput
            fieldLabel="Confirm Password"
            iconComponent={<Icon source="lock" size={20} color="#666" />}
            inputType="password"
          />

          <CustomButton
            buttonLabel="Register"
            onPress={() => console.log("object")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

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

  svgStyle: {
    borderColor: "#ddd",
    borderWidth: 2,
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
});
