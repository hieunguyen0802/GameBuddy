import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput
  } from "react-native";
  import React from "react";
  import RegisterSVG from "../../assets/images/misc/registration.svg";
  import FacebookSVG from "../../assets/images/misc/facebook.svg";
  import GoogleSVG from "../../assets/images/misc/google.svg";
  import TwitterSVG from "../../assets/images/misc/twitter.svg";
  import { transform } from "@babel/core";
  import {Icon, Button} from 'react-native-paper'
  
  const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <View style={{ paddingHorizontal: 25 }}>
            <RegisterSVG
              width={300}
              height={300}
              style={{ transform: [{ rotate: "-5deg" }] }}
            />
            <Text style={styles.loginText}>Register  </Text>
            <View style={{flexDirection:"row", borderBottomWidth: 1, paddingBottom:8, marginBottom: 25}}>
              <Icon source="at" size={20} color="#666" />
              <TextInput
                placeholder="email" 
                style={{marginLeft: 5, flex:1, paddingVertical:0}}
                keyboardType="email-address" 
              />
            </View>
  
            <View style={{flexDirection:"row", borderBottomWidth: 1, paddingBottom:8, marginBottom: 25}}>
              <Icon source="lock" size={20} color="#666" />
              <TextInput
                placeholder="password" 
                style={{marginLeft: 5, flex:1, paddingVertical:0}}
                secureTextEntry={true}
              />
              <TouchableOpacity onPress={() => console.log("first")}>
                <Text style={{fontWeight:"700", color:"#AD40AF" }}>Forgot ? </Text>
              </TouchableOpacity>
            </View>
  
            <Button mode="contained" onPress={() => console.log('Login')} style={{marginBottom: 30, backgroundColor: "#AD40AF"}} labelStyle={{fontSize:18, fontWeight:"700"}}>
              Register
            </Button>
            <Text style={{textAlign:"center", marginBottom: 30}}>Or, login with ...</Text>
  
            <View style={{flexDirection: "row", justifyContent:"space-between", marginBottom: 30}}>
              <TouchableOpacity onPress={() => console.log("google")} style={{borderColor: "#ddd", borderWidth:2, borderRadius: 20, paddingHorizontal: 30, paddingVertical: 10 }}>
                <GoogleSVG
                  width={24}
                  height={24}
                />
              </TouchableOpacity>
  
              <TouchableOpacity onPress={() => console.log("facebook")} style={{borderColor: "#ddd", borderWidth:2, borderRadius: 20, paddingHorizontal: 30, paddingVertical: 10 }}>
                <FacebookSVG
                  width={24}
                  height={24}
                />
              </TouchableOpacity>
  
              <TouchableOpacity onPress={() => console.log("twitter")} style={{borderColor: "#ddd", borderWidth:2, borderRadius: 20, paddingHorizontal: 30, paddingVertical: 10 }}>
                <TwitterSVG
                  width={24}
                  height={24}
                />
              </TouchableOpacity>
            </View>
  
            <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
              <Text style={{fontSize:16}}>Already registered ? </Text>
              <Button onPress={() => navigation.goBack()} labelStyle={{color: "#AD40AF", fontSize:18 , fontWeight:"700", paddingVertical:0}}>
                Login
              </Button>
  
            </View>
          </View>
        </View>
  
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
      marginBottom: 30
    },
  
  });
  