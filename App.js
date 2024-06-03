import 'react-native-gesture-handler'
import { PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthStack from "./navigation/AuthStack";
import AppStack from "./navigation/AppStack";

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <SafeAreaProvider>
          {/* <AppStack /> */}
          <AuthStack />
        </SafeAreaProvider>
      </PaperProvider>
    </NavigationContainer>
  );
}
