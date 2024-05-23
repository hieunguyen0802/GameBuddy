import { StatusBar } from "react-native";
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import IndexScreen from "./screens/IndexScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaProvider>
            <Stack.Navigator screenOptions={  {
                  headerShown: false,
                  statusBarHidden:true,
                  tintColor:{color:"#fff"},
                  statusBarColor:"white"
              }}>
              <Stack.Screen name="Index" component={IndexScreen}/>
              <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
          </SafeAreaProvider>
      </PaperProvider>
    </NavigationContainer>
  );
}

